
let express = require('express');
let router = express.Router();
let fs = require('fs');
let url = require('url');
let iconv = require('iconv-lite');   
let dealFn = require('./dealfn.js');

let database = null;
let maxVoteTimes = 5;
let data_test=0;

//引入web3模块
let Web3 = require('web3');
let web3 = new Web3();
//web3.setProvider(new web3.providers.HttpProvider("http://52.74.3.64:9646"));
//var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://52.74.3.64:9646"));

var injectedProvider
// if (typeof window !== 'undefined' && typeof window.web3_etz !== 'undefined') {
//   injectedProvider = window.web3_etz.currentProvider
//   web3 = new Web3(injectedProvider)
// } else {
  web3 = new Web3(new Web3.providers.HttpProvider('http://52.74.3.64:9646'))
// }

console.log('Initialization web3 complete,the first account is'+web3.eth.accounts[0]);
let abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"name","type":"string"},{"name":"link","type":"string"},{"name":"applyAmount","type":"uint256"},{"name":"sendPeriod","type":"uint256"},{"name":"voteNumYes","type":"uint256"},{"name":"voteNumNo","type":"uint256"},{"name":"voteNumAct","type":"uint256"},{"name":"adopted","type":"bool"},{"name":"passed","type":"bool"},{"name":"addr","type":"address"},{"name":"payedTimes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MasterAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VoteIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"setOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"preSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"proposalAddr","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"blockOrigin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"PreVoter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"sortedProposals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pname","type":"string"},{"name":"plink","type":"string"},{"name":"papplyAmount","type":"uint256"},{"name":"psendPeriod","type":"uint256"},{"name":"paddr","type":"address"}],"name":"proposalSubmit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"blockStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sortProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cycleIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"voteType","type":"uint256"},{"name":"proposalIndex","type":"uint256"},{"name":"votedIndex","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votePeriod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"voteType","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startRefresh","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"sendApply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"etzPerProposal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"masterNodeNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getProposalsNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"string"},{"indexed":true,"name":"link","type":"string"}],"name":"Submit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"Voteevent","type":"event"}];

var mycontract = new web3.eth.Contract(abi, '0xc1e47b18030d373c6c21106a63c5621972621461');
mycontract.methods.votePeriod().call(null,function(error,result){
        console.log("votePeriod "+result);
});


mycontract.events.Voteevent({
    fromBlock: 0,
    toBlock:'latest'
}, function(error, event){
     console.log("error"+error);
     console.log("result:\n"+JSON.stringify(event)); })
.on('data', function(event){
    console.log(event); // same results as the optional callback above
});


mycontract.methods.getProposalsNum().call().then(function(result){
    console.log(result)
    data_test = result;
});


 var data =mycontract.methods.PreVoter().encodeABI();
 data =mycontract.methods.proposalSubmit("x1" ,"p1", 2, 1, "0x9194a2F58EE5673B578c5577351dcD3bAE062B2d").encodeABI();
 data =mycontract.methods.vote(1,1).encodeABI();
 console.log(data)

 /*web3.eth.signTransaction({
    from: "0x9194a2F58EE5673B578c5577351dcD3bAE062B2d",
    gasPrice: "20000000000",
    gas: "21000",
    to: '0x17689E2AaD9d0A71AC7A93382Af893C8999Aa3E2',
    value: "100000000000000000",
    data: ""
}).then(console.log);*/

 
 web3.eth.accounts.signTransaction({
    to: '0xc1e47b18030d373c6c21106a63c5621972621461',
    data: data,
    gas: 1500000,
  },'0x7b5d9d3cc6e1f78e6fef655335e4e77eff8d67e900f20971d50f6ecd3bac4d24',function(err,result){
    console.log("rawTransaction:"+result.rawTransaction)
    web3.eth.methods.vote(result.rawTransaction,function(errs,results){
     console.log("errs:",errs);
     console.log("result:",results)
   });
 });


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
    var result = await mycontract.methods.getProposalsNum().call();
    plength = Number(result);
    let total = database.data.total;
    
    if(plength > database.data.total)
    { 
        var pIndex = total;
        var proposal = await mycontract.methods.proposals(pIndex).call();
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
            
    data_command =mycontract.methods.proposalSubmit(proposal_name ,proposal_link, applyAmount,sendPeriod,addr).encodeABI();  
 
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


