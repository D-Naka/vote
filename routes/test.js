let express = require('express');
let router = express.Router();
let fs = require('fs');
let url = require('url');
let iconv = require('iconv-lite');   
let dealFn = require('./dealfn.js');

let database = null;
let maxVoteTimes = 5;

//引入web3模块
let Web3 = require('web3');
let web3 = new Web3();
let data_test=0;
web3.setProvider(new web3.providers.HttpProvider("http://52.74.3.64:9646"));
console.log('Initialization web3 complete,the first account is'+web3.eth.accounts[0]);
let abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"name","type":"string"},{"name":"link","type":"string"},{"name":"applyAmount","type":"uint256"},{"name":"sendPeriod","type":"uint256"},{"name":"voteNumYes","type":"uint256"},{"name":"voteNumNo","type":"uint256"},{"name":"voteNumAct","type":"uint256"},{"name":"adopted","type":"bool"},{"name":"passed","type":"bool"},{"name":"addr","type":"address"},{"name":"payedTimes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MasterAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VoteIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"setOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"preSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"proposalAddr","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"blockOrigin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"PreVoter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"sortedProposals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pname","type":"string"},{"name":"plink","type":"string"},{"name":"papplyAmount","type":"uint256"},{"name":"psendPeriod","type":"uint256"},{"name":"paddr","type":"address"}],"name":"proposalSubmit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"blockStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sortProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cycleIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"voteType","type":"uint256"},{"name":"proposalIndex","type":"uint256"},{"name":"votedIndex","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votePeriod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"voteType","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startRefresh","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"sendApply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"etzPerProposal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"masterNodeNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getProposalsNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"string"},{"indexed":true,"name":"link","type":"string"}],"name":"Submit","type":"event"}];

var mycontract = new web3.eth.Contract(abi, '0xd0ddb63875b173f7e393f797157dff3f7a60696d');
mycontract.methods.votePeriod().call(null,function(error,result){
        console.log("votePeriod "+result);
    })
//mycontract.events['Submit'].on(function)
mycontract.events["Submit"]({},(err,results)=>{
    console.log("000:",results);
});

mycontract.events.Submit({}, function(error, event){ 
    console.log("fuction"+event); 
})
.on('data', function(event){
    console.log("data"+event); // same results as the optional callback above
})
.on('changed', function(event){
    // remove event from local database
})
.on('error', console.error);


mycontract.events.Submit({
    fromBlock: 0,
    toBlock:'latest'
}, function(error, event){
     console.log("result:\n"+JSON.stringify(event)); })
.on('data', function(event){
    console.log(event); // same results as the optional callback above
})
.on('changed', function(event){
    // remove event from local database
})
.on('error', console.error);


mycontract.methods.getProposalsNum().call().then(function(result){
     console.log(result)
     data_test = result;
 });

 var data =mycontract.methods.PreVoter().encodeABI();
 data =mycontract.methods.proposalSubmit("0x0100000000000000000000000000000000" ,"p1", 2, 1, "0x17689E2AaD9d0A71AC7A93382Af893C8999Aa3E2").encodeABI();
 data =mycontract.methods.vote(1,1).encodeABI();

 console.log(data)

//读取提案信息
let pIndex =0;
mycontract.methods.proposals(pIndex).call(null,function(error,result){
    console.log("Proposals "+result.name+result.link);
})


let MyTokenABI = 

var tokenContract = new web3.eth.Contract(MyTokenABI, '0x6a0dF9E94a41fCd89d8236a8C03f9D678df5Acf9');

tokenContract.methods.name().call(null,function(error,result){
        console.log("contract name "+result);
    })


