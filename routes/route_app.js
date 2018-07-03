
let express = require('express');
let router = express.Router();
let fs = require('fs');
let url = require('url');
let iconv = require('iconv-lite');   
let dealFn = require('./dealfn.js');
let database = null;
let maxVoteTimes = 5;
let data_test=0;
var {providerURL, contractAddr, controllerAddr, abi } = require('../eth/web3')
var {web3,vote_contract}=require('../eth/web3')
var Web3 = require('web3');

vote_contract.methods.votePeriod().call(null,function(error,result){
        console.log("votePeriod "+result);
});
vote_contract.methods.getProposalsNum().call().then(function(result){
    console.log(result)
    data_test = result;
});
var data =vote_contract.methods.PreVoter().encodeABI();
data =vote_contract.methods.proposalSubmit("x1" ,"p1", 2, 1, "0x9194a2F58EE5673B578c5577351dcD3bAE062B2d").encodeABI();
//data =vote_contract.methods.vote(1,1).encodeABI();
console.log(data)

dealFn.readFileData('database.json').then((data) => {
    database = data;
    database.data.total = database.data.objects.length;
}, (msg) => {
    console.log(msg);
})

exports.index = (req, res) => {
    res.render('index');
};

exports.detail = (req, res) => {
    res.render('detail');
};

exports.register = (req, res) => {
    res.render('register');
};

exports.search = (req, res) => {
    res.render('search');
};

exports.rule = (req, res) => {
    res.render('rule');
};

exports.index_data = async(req, res) => {
    let query = url.parse(req.url, true).query,
        offset = +query.offset,
        limit = +query.limit,
        sendObjs = database.data.objects.slice(offset, offset + limit),
        sendData = {
            errno: 0,
            msg: 'success',
            data: {
                total: database.data.total,
                offset: offset,
                limit: limit,
                objects: sendObjs
        }
    };
    if(offset > database.data.total) {
        sendData.data.objects = [];
    }
   
    res.send(JSON.stringify(sendData));


    //读取提案信息
    var result = await vote_contract.methods.getProposalsNum().call();
    plength = Number(result);
    let total = database.data.total;
    
    if(plength > database.data.total)
    { 
        var pIndex = total;
        var proposal = await vote_contract.methods.proposals(pIndex).call();
        let registerData = proposal;
        registerData.id = ++total;
        database.data.total++;
        registerData.head_icon = '/images/boy.png';

        registerData1={
			proposal_name: proposal.name,
            proposal_link: proposal.link,
            applyAmount:proposal.applyAmount,
            sendPeriod: proposal.sendPeriod,
            voteNumYes: proposal.voteNumYes,
            voteNumNo:proposal.voteNumNo,
            voteNumAct:proposal.voteNumAct,
            adopted: proposal.adopted,
            passed: proposal.passed,
            addr:proposal.addr,
            payedTimes:proposal.payedTimes,
            proposal_index:pIndex+1
                
        }  
        database.data.objects.push(registerData1);
        dealFn.writeFileData('database.json', database).then((msg) => {
            console.log(msg);
        }, (msg) => {
            console.log(msg);
        });
    } 
};

exports.index_poll = (req, res) => {
    let query = url.parse(req.url, true).query,
        id = +query.id,
        ownObj = {},
        voterId = +query.voterId,
            sendData = {
            errno: 0,
            msg: '投票成功'
        },
        pollUser = dealFn.getItem(id, database.data.objects),
        voter = dealFn.getItem(voterId, database.data.objects);

    if(voter.vote_times > 1) {
        sendData.errno = '-2';
        sendData.msg = '每个主节点一期只能投一次票，您已经投过了';
        res.send(JSON.stringify(sendData));
        return;
    }
    ownObj = dealFn.cloneUser(voter);
    pollUser.vfriend.push(ownObj);
    pollUser.vote++;
    database.data.objects = dealFn.sortRank(database.data.objects);
    dealFn.writeFileData('database.json', database).then((msg) => {
        console.log(msg);
    }, (msg) => {
        console.log(msg);
    });
    res.send(JSON.stringify(sendData));
};

exports.register_data = (req, res) => {
    let total = database.data.total,
        registerData = req.body,
        sendData = {};

    let proposal_name = registerData.proposal_name;
    let proposal_link = registerData.proposal_link;
    let applyAmount = parseInt(registerData.applyAmount);
    let sendPeriod = parseInt(registerData.sendPeriod);
    let addr = registerData.addr;
            
    data_command =vote_contract.methods.proposalSubmit(proposal_name ,proposal_link, applyAmount,sendPeriod,addr).encodeABI();  
 
    /*
    $.ajax({
        url: '/vote/register?vote=0',
        type: 'GET',
        success: function(data_command) {
            data_command = JSON.parse(data_command);
            if(data_command.errno == 0){
               // $('.personal').html(voteFn.detailPersonalStr(data.data));
               var txt;      
               txt = document.getElementById('txta').value; //获取textarea的值    
               document.write (txt);     
               document.getElementById('txta').value = data_command;  //设置textarea的值   

            }else {
                alert(data_command.msg);
            }
        }
    });
    //window.location.href="register?vote=0"
    
   registerData.id=1;
    sendData = {
        errno: 0,
        msg: data,
        id: registerData.id
    }
    res.send(JSON.stringify(sendData));*/
};


exports.index_search = (req, res) => {
    let searchData = req.query,
        content = searchData.content,
        sendData = {
            errno: 0,
            msg: 'success',
            data: {}
        };

    sendData.data = dealFn.serchItems(content, database.data.objects);
    res.send(JSON.stringify(sendData));
};

exports.detail_data= (req, res) => {
    let detailData = req.query,
        id = +detailData.id,
        userDetailObj = dealFn.getItem(id, database.data.objects),
        sendData = {
            errno: 0,
            msg: 'success',
            data: {}
        };

    userDetailObj.vfriend = userDetailObj.vfriend.sort(function(a, b) {
        return b.time - a.time;
    })
    sendData.data = userDetailObj;
    res.send(JSON.stringify(sendData));
};


