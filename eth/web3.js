var { providerURL, contractAddr, controllerAddr, abi } = require('./config')
var Web3 = require('web3');
var web3 = new Web3('http://etzrpc.org:80')
// var web3 = new Web3('ws://52.74.3.64:9647')

web3.eth.getBalance("0x3C1b3736D9442366fB1ffa3dd9364170535649c7").then(console.log)

var vote_contract = new web3.eth.Contract(abi, contractAddr);

module.exports = {
  web3,
  vote_contract,
}
