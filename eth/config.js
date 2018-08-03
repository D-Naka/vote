const providerURL = 'http://etzrpc.org:80'
//const providerURL = 'http://52.74.3.64:9646'


const contractAddr = '0xcd65310de2a886b2067e8563d34b2ced2b7eb2d8'

const controllerAddr = '0x9194a2F58EE5673B578c5577351dcD3bAE062B2d'

const abi = 
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "pIndex",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "remainTimes",
				"type": "uint256"
			}
		],
		"name": "send_event",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "delegate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "pname",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "plink",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "papplyAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "psendPeriod",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "paddr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "VoteIndex",
				"type": "uint256"
			}
		],
		"name": "submit_event",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "pIndex",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "voteNumYes",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "voteNumNo",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "voteNumAct",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "adopted",
				"type": "bool"
			}
		],
		"name": "vote_event",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "pname",
				"type": "string"
			},
			{
				"name": "plink",
				"type": "string"
			},
			{
				"name": "papplyAmount",
				"type": "uint256"
			},
			{
				"name": "psendPeriod",
				"type": "uint256"
			},
			{
				"name": "paddr",
				"type": "address"
			}
		],
		"name": "proposalSubmit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "startRefresh",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			},
			{
				"name": "voteType",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "blockOrigin",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "blockStart",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "budgetAddedChain",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cycleIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "delegateVoters",
		"outputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "isdelegated",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "etzPerProposal",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "pIndex",
				"type": "uint256"
			}
		],
		"name": "getIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getMasterId",
		"outputs": [
			{
				"name": "",
				"type": "bytes8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getProposalsNum",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mapIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MasterAddr",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "masterNodeNum",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "link",
				"type": "string"
			},
			{
				"name": "applyAmount",
				"type": "uint256"
			},
			{
				"name": "sendPeriod",
				"type": "uint256"
			},
			{
				"name": "voteNumYes",
				"type": "uint256"
			},
			{
				"name": "voteNumNo",
				"type": "uint256"
			},
			{
				"name": "voteNumAct",
				"type": "uint256"
			},
			{
				"name": "adopted",
				"type": "bool"
			},
			{
				"name": "passed",
				"type": "bool"
			},
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "remainTimes",
				"type": "uint256"
			},
			{
				"name": "eachAmount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "proposalsAddr",
		"outputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "remainTimes",
				"type": "uint256"
			},
			{
				"name": "eachAmount",
				"type": "uint256"
			},
			{
				"name": "passed",
				"type": "bool"
			},
			{
				"name": "voteIndex",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sortedProposals",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "status",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "t1",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "t2",
		"outputs": [
			{
				"name": "",
				"type": "bytes8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "VoteIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "votePeriod",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"name": "voteType",
				"type": "uint256"
			},
			{
				"name": "proposalIndex",
				"type": "uint256"
			},
			{
				"name": "votedIndex",
				"type": "uint256"
			},
			{
				"name": "isdelegate",
				"type": "bool"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports = {
  providerURL,
  contractAddr,
  controllerAddr,
  abi,
}
