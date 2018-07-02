var { providerURL, contractAddr, controllerAddr, abi } = require('./config')
var Web3 = require('web3');
var web3 = new Web3('http://52.74.3.64:9646')
var vote_contract = new web3.eth.Contract(abi, contractAddr);

module.exports = {
  web3,
  vote_contract,
}
