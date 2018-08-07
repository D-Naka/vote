
let express = require('express');
let router = express.Router();
let fs = require('fs');
let url = require('url');
let iconv = require('iconv-lite');
let dealFn = require('./dealfn.js');
let database = null;
let VoteIndex = 1;
let Proposal_num=0;
let cycle_num = 0;
let totalBalance=0;
var {providerURL, contractAddr, controllerAddr, abi } = require('../eth/web3')
var {web3,vote_contract}=require('../eth/web3')
var Web3 = require('web3');

vote_contract.methods.votePeriod().call(null,function(error,result){
        console.log("votePeriod "+result);
});
vote_contract.methods.getProposalsNum().call().then(function(result){
    console.log(result)
    Proposal_num = result;
});
var data =vote_contract.methods.proposalSubmit("x1" ,"p1", 2, 1, "0x9194a2F58EE5673B578c5577351dcD3bAE062B2d").encodeABI();
data =vote_contract.methods.vote(1,1).encodeABI();


function  myfunc(Interval){

    vote_contract.methods.getProposalsNum().call().then(function(result){
        Proposal_num = result;
    });
    vote_contract.methods.VoteIndex().call().then(function(result){
        VoteIndex = result;
    });
    vote_contract.methods.getContractBalance().call().then(function(result){
        totalBalance = parseInt(result/(10**16));
    });

    console.log(Proposal_num);
    console.log(database.data.total);
    console.log("totalBalance"+totalBalance);
    if(Proposal_num>database.data.total)
    {

        vote_contract.methods.proposals(database.data.total).call().then(function(result){      
                //添加一个提案
                let total = database.data.total;
                var proposal_name   = result.name;
                var proposal_link   = result.link;
                var applyAmount     = result.applyAmount;
                var sendPeriod      = result.sendPeriod;
                var addr            = result.addr;
                var voteIndex       = VoteIndex;
                registerData1={
                    proposal_name: proposal_name,
                    proposal_link: proposal_link,
                    applyAmount:applyAmount,
                    sendPeriod: sendPeriod,
                    voteNumYes: 0,
                    voteNumNo:0,
                    voteNumAct:0,
                    adopted: false,
                    passed: false,
                    addr:addr,
                    payedTimes:0,
                    proposal_index:total+1,
                    voteIndex:voteIndex
                }
                database.data.total += 1;
                database.data.objects.push(registerData1);
                dealFn.writeFileData('database.json', database).then((msg) => {
                    console.log(msg);
                }, (msg) => {
                    console.log(msg);
                });
        });
      
    }
    else
    {

        if(cycle_num>Proposal_num-1)
        {
            cycle_num =0; 
        }
        vote_contract.methods.proposals(cycle_num).call().then(function(result){      
                //读取提案信息
                var proposal_name       = result.name;
                var voteNumYes   = result.voteNumYes;
                var voteNumNo    = result.voteNumNo;
                console.log("cycle_num"+cycle_num);
                console.log("voteNumYes"+voteNumYes);
                voter = dealFn.getItem(cycle_num, database.data.objects);
                voter.voteNumYes=voteNumYes;
                voter.voteNumNo =voteNumNo;
                database.data.totalbalance = totalBalance;
                dealFn.writeFileData('database.json', database).then((msg) => {
                    console.log(msg);
                }, (msg) => {
                    console.log(msg);
                });
        });
        cycle_num +=1;
    }

}
var myInterval=setInterval(myfunc,5000,"Interval");




// vote_contract.events.submit_event({
//     fromBlock: 0,
//     toBlock:'latest'
// }, function(error, event){
//      console.log("error"+error);
//      console.log("NewProposal"); 
//      console.log(event.returnValues[0]); 
//     //读取提案信息
//      let total = database.data.total;
//      var proposal_name   = event.returnValues[0];
//      var proposal_link   = event.returnValues[1];
//      var applyAmount     = event.returnValues[2];
//      var sendPeriod      = event.returnValues[3];
//      var addr            = event.returnValues[4];
//      var voteIndex            = event.returnValues[5];
//      registerData1={
//          proposal_name: proposal_name,
//          proposal_link: proposal_link,
//          applyAmount:applyAmount,
//          sendPeriod: sendPeriod,
//          voteNumYes: 0,
//          voteNumNo:0,
//          voteNumAct:0,
//          adopted: false,
//          passed: false,
//          addr:addr,
//          payedTimes:0,
//          proposal_index:total+1,
//          voteIndex:voteIndex
//      }
//      database.data.total += 1;
//      database.data.objects.push(registerData1);
//      dealFn.writeFileData('database.json', database).then((msg) => {
//          console.log(msg);
//      }, (msg) => {
//          console.log(msg);
//      });

// });


// vote_contract.events.vote_event({
//     fromBlock: 0,
//     toBlock:'latest'
// }, function(error, event){
//      console.log("NewVote"); 
//      console.log("voteYes"+event.returnValues[0]); 
   
//     //读取提案信息
//      var pIndex       = event.returnValues[0];
//      var voteNumYes   = event.returnValues[1];
//      var voteNumNo    = event.returnValues[2];
//      console.log("voteNumYes",voteNumYes)
//      console.log("pIndex",pIndex)
//      voter = dealFn.getItem(parseInt(pIndex)+1, database.data.objects);
//      voter.voteNumYes=voteNumYes;
//      voter.voteNumNo =voteNumNo;
//      dealFn.writeFileData('database.json', database).then((msg) => {
//          console.log(msg);
//      }, (msg) => {
//          console.log(msg);
//      });
// });


// vote_contract.getPastEvents('submit_event', {
//     fromBlock: 0,
//     toBlock: 'latest'
// }, function(error, events){ 
//     console.log("length"+events.length);
//     console.log(events[0].returnValues[0]); 

//     //读取提案信息
//     let total = database.data.total;
//     var plen = events.length;
//     if (total < plen){

//         for(let i=total;i<plen;i++)
//         {
//             var proposal_name   = events[i].returnValues[0];
//             var proposal_link   = events[i].returnValues[1];
//             var applyAmount     = events[i].returnValues[2];
//             var sendPeriod      = events[i].returnValues[3];
//             var addr            = events[i].returnValues[4];
//             var voteIndex       = events[i].returnValues[5];
//             registerData1={
//                 proposal_name: proposal_name,
//                 proposal_link: proposal_link,
//                 applyAmount:applyAmount,
//                 sendPeriod: sendPeriod,
//                 voteNumYes: 0,
//                 voteNumNo:0,
//                 voteNumAct:0,
//                 adopted: false,
//                 passed: false,
//                 addr:addr,
//                 payedTimes:0,
//                 proposal_index:i+1 ,
//                 voteIndex:voteIndex       
//             }
//             console.log(registerData1);
//             database.data.total += 1;
//             database.data.objects.push(registerData1);
//             dealFn.writeFileData('database.json', database).then((msg) => {
//                 console.log(msg);
//             }, (msg) => {
//                 console.log(msg);
//             });
//         }
        
//     }
    

// });




dealFn.readFileData('database.json').then((data) => {
    database = data;
    database.data.total = database.data.objects.length;
}, (msg) => {
    console.log(msg);
})

exports.index = (req, res) => {
    res.render('index');
};
exports.indexen = (req, res) => {
    // console.log("res")
    res.render('indexen');
};

exports.detail = (req, res) => {
    res.render('detail');
};

exports.register = (req, res) => {
    res.render('register');
};

exports.registeren = (req, res) => {
    res.render('registeren');
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
