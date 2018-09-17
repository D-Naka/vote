document.write("<script language=javascript src='/javascripts/jquery.min.js'></script>");

document.write("<script language=javascript src='/javascripts/jquery.simplePagination.js'></script>");

abi=[
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
		"name": "getbudget",
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
		"name": "getPayed",
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
				"name": "sended",
				"type": "bool"
			},
			{
				"name": "blockStart",
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
				"name": "eachAmount",
				"type": "uint256"
			},
			{
				"name": "passed",
				"type": "bool"
			},
			{
				"name": "sended",
				"type": "bool"
			},
			{
				"name": "pIndex",
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
];
var VoteIndex = 0;
var proposal_len;
var gproposal_num;

if (typeof web3_etz !== 'undefined') {
	// Use Mist/MetaMask's provider
	web3 = new Web3(web3_etz.currentProvider)
	web3.eth.getCoinbase(console.log)
} else {
	console.log('No web3? You should consider trying MetaMask!')
	// fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var mycontract = new web3.eth.Contract(abi,"0x4761977f757e3031350612d55bb891c8144a414b");

// ch_en = 0;

function en(){
	window.location.href = "indexen?language=en";
}
function cn(){
	window.location.href = "index?language=cn";
}

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

// ch_en = 1;
$(document).ready(function($) {
	var url = window.location.href,
		indexReg = /index/,
		registerReg = /register/,
		searchReg = /search/,
		detailReg = /detail/,
		limit = 10,
		offset = 0;

		//web3使用示例，要先导入<script type="text/javascript" src="/javascripts/web3.min.js"></script>
		// var web3 = new Web3(web3.currentProvider);
		// console.log(web3);
		// web3.eth.signTransaction({from: web3.eth.getCoinbase(), to: '0xc1e47b18030d373c6c21106a63c5621972621461',gas: 2000000, value: 10000000000000} , console.log)

	var ch_en=GetQueryString('language');
	if(ch_en == 'en'){
		$('.register a').attr('href','registeren?language=en');
	};


	var voteFn = {
		/**
		 * [将数据存储在本地]
		 * @param {String} key [键值]
		 * @param {Object} obj [存储内容]
		 */
		setStorage: function(key, obj) {
			localStorage.setItem(key, JSON.stringify(obj));
		},

		/**
		 * [获取本地存储数据]
		 * @param {String} key [键值］
		 * @return {Object}    [存储内容]
		 */
		getStorage: function(key) {
			return JSON.parse(localStorage.getItem(key));
		},

		/**
		 * [删除本地存储数据]
		 * @param {String} key [键值］
		 */
		delteStorage: function(key) {
			localStorage.removeItem(key);
		},

		/**
		 * [拼接首页用户信息字符串]
		 * @param  {Array} objs [用户信息数组]
		 * @return {String}     [用户信息字符串]
		 */
		userStr: function(objs) {
			var str = '';
			//VoteIndex = objs[objs.length-1].voteIndex;	
			//document.getElementById("num").innerHTML = VoteIndex;
			//console.log("num"+VoteIndex);
			mycontract.methods.getIndex(1).call().then(function(result){
				console.log("getIndex"+result);
			});

				
			for(var i=objs.length-1; i>=0; i--) {
				str += '<li>'
	                + '<div class="head">'
	                + '<img src="' + "/images/boy.png" + '" alt="">'
	                + '</a>'
					+ '</div>'

	                + '</div>'
	                + '<div class="descr">'
	                + '<div>'
	                + '<span>' + objs[i].proposal_name + '</span>'
	                + '<span>|</span>'
	                + '<span>编号#' + objs[i].proposal_index + '</span>'
					+ '</div>'
					+ '<p>' +"提案简介："+ '</p>'

					+'<p>' +objs[i].proposal_link + '</p>'
					+ '<p>' +"账户地址："+ objs[i].addr + '</p>'
					+ '<p>' +"申请预算："+ Math.round(objs[i].applyAmount/(10**16))/100  +" ETZ &nbsp   &nbsp  是否已发放："+ objs[i].sended + '</p>'
					+ '<p>' +"投票期数： 第"+ objs[i].voteIndex +"期"+ '</p>'					
	                + '</a>'
	                + '</div>'
					
					+ '<div class="up">'
					+ '<div class="vote_box vote_box_left">'
	                + '<div class="vote vote_num">'
	                + '<span>' + objs[i].voteNumYes + '票</span>'
					+ '</div>'
	                + '<div class="btn btn1 btn_vote" id=' + objs[i].proposal_index + '>'
	                + '赞成'
					+ '</div>'
					+ '</div>'
					+ '<div class="vote_box vote_box_right">'
					+ '<div class="vote vote_num">'
	                + '<span>' + objs[i].voteNumNo + '票</span>'
					+ '</div>'
	                + '<div class="btn btn2 btn_vote" id=' + objs[i].proposal_index + '>'
	                + '反对'
					+ '</div>'
					+ '</div>'
					+ '</li>';
			}
			return str;
			
		},
		userStr_en: function(objs) {
			var str = '';
			VoteIndex = objs[objs.length-1].voteIndex;	
			document.getElementById("num").innerHTML = VoteIndex;
			for(var i=objs.length-1; i>=0; i--) {
				str += '<li>'
	                + '<div class="head">'
	                + '<img src="' + "/images/boy.png" + '" alt="">'
	                + '</a>'
					+ '</div>'

	                + '</div>'
	                + '<div class="descr">'
	                + '<div>'
	                + '<span>' + objs[i].proposal_name + '</span>'
	                + '<span>|</span>'
	                + '<span>Number#' + objs[i].proposal_index + '</span>'
	                + '</div>'
					+ '<p>' +"Proposal abstract："+ '</p>'
					+'<p>' +objs[i].proposal_link + '</p>'

					+ '<p>' +"Addr："+ objs[i].addr + '</p>'
					+ '<p>' +"Funding amount："+ Math.round(objs[i].applyAmount/(10**16))/100  +"ETZ  &nbsp  &nbsp  Send times："+ objs[i].sended + '</p>'
					+ '<p>' +"Voting periods： The &nbsp"+ objs[i].voteIndex +" phase"+ '</p>'					
	                + '</a>'
	                + '</div>'
					
					+ '<div class="up">'
					+ '<div class="vote_box vote_box_left ">'
	                + '<div class="vote vote_num">'
	                + '<span>' + objs[i].voteNumYes + '&nbsp votes</span>'
					+ '</div>'
	                + '<div class="btn btn1 btn_vote" id=' + objs[i].proposal_index + '>'
	                + 'Agree'
					+ '</div>'
					+ '</div>'
					+ '<div class="vote_box vote_box_right">'
					+ '<div class="vote vote_num">'
	                + '<span>' + objs[i].voteNumNo + '&nbsp votes</span>'
					+ '</div>'
	                + '<div class="btn btn2 btn_vote" id=' + objs[i].proposal_index + '>'
	                + 'Against'
					+ '</div>'
					+ '</div>'
					+ '</li>';
			}
			return str;
			
		},

		/**
		 * [拼接首页用户信息字符串]
		 * @param  {Array} objs [用户信息数组]
		 * @return {String}     [用户信息字符串]
		 */
		userStrSearch: function(objs) {
			var str = '';
			for(var i=0; i<objs.length; i++) {
				str += '<li>'
	                + '<div class="head">'
	                + '<img src="' + "/images/boy.png" + '" alt="">'
	                + '</a>'
					+ '</div>'

	                + '</div>'
	                + '<div class="descr">'
	                + '<div>'
	                + '<span>' + objs[i].proposal_name + '</span>'
	                + '<span>|</span>'
	                + '<span>编号#' + objs[i].proposal_index + '</span>'
	                + '</div>'
					+'<a href="'+objs[i].proposal_link+'" target="_blank">'+ '<p>' +"提案简介："+objs[i].proposal_link + '</p>'+'</a>'
					+ '<p>' +"账户地址："+ objs[i].addr + '</p>'
					+ '<p>' +"申请预算："+ Math.round(objs[i].applyAmount/(10**16))/100  +"ETZ  &nbsp  &nbsp  是否发放："+ objs[i].sended + '</p>'
					+ '<p>' +"投票期数： 第"+ objs[i].voteIndex +"期"+ '</p>'					
	                + '</a>'
	                + '</div>'
					
					+ '<div class="up">'
					+ '<div class="vote_box">'
	                + '<div class="vote vote_num">'
	                + '<span>' + objs[i].voteNumYes + '票</span>'
					+ '</div>'
	                + '<div class="btn btn1 btn_vote" id=' + objs[i].proposal_index + '>'
	                + '赞成'
					+ '</div>'
					+ '</div>'
					+ '<div class="vote_box">'
					+ '<div class="vote vote_num">'
	                + '<span>' + objs[i].voteNumNo + '票</span>'
					+ '</div>'
	                + '<div class="btn btn2 btn_vote" id=' + objs[i].proposal_index + '>'
	                + '反对'
					+ '</div>'
					+ '</div>'
					+ '</li>';
			}
			return str;
			
		},
		/**
		 * [拼接首页用户信息字符串]
		 * @param  {Array} objs [用户信息数组]
		 * @return {String}     [用户信息字符串]
		 */
		userStrSearch_en: function(objs) {
			var str = '';
			for(var i=0; i<objs.length; i++) {
				str += '<li>'
	                + '<div class="head">'
	                + '<img src="' + "/images/boy.png" + '" alt="">'
	                + '</a>'
					+ '</div>'

	                + '</div>'
	                + '<div class="descr">'
	                + '<div>'
	                + '<span>' + objs[i].proposal_name + '</span>'
	                + '<span>|</span>'
	                + '<span>Number#' + objs[i].proposal_index + '</span>'
	                + '</div>'
					+'<a href="'+objs[i].proposal_link+'" target="_blank">'+ '<p>' +"Proposal link："+objs[i].proposal_link + '</p>'+'</a>'
					+ '<p>' +"Addr："+ objs[i].addr + '</p>'
					+ '<p>' +"Funding amount："+ Math.round(objs[i].applyAmount/(10**16))/100  +"ETZ  &nbsp  &nbsp  Send times："+ objs[i].sended + '</p>'
					+ '<p>' +"Voting periods： The"+ objs[i].voteIndex +"phase"+ '</p>'					
	                + '</a>'
	                + '</div>'
					
					+ '<div class="up">'
					+ '<div class="vote_box">'
	                + '<div class="vote vote_num">'
	                + '<span>' + objs[i].voteNumYes + '&nbsp votes</span>'
					+ '</div>'
	                + '<div class="btn btn1 btn_vote" id=' + objs[i].proposal_index + '>'
	                + 'Agree'
					+ '</div>'
					+ '</div>'
					+ '<div class="vote_box">'
					+ '<div class="vote vote_num">'
	                + '<span>' + objs[i].voteNumNo + '&nbsp votes</span>'
					+ '</div>'
	                + '<div class="btn btn2 btn_vote" id=' + objs[i].proposal_index + '>'
	                + 'Against'
					+ '</div>'
					+ '</div>'
					+ '</li>';
			}
			return str;
			
		},

		/**
		 * [拼接个人详细页信息字符串]
		 * @param  {Object} obj [个人信息对象]
		 * @return {String}     [个人信息字符串]
		 */
		detailPersonalStr: function(obj) {
			var str ='<div class="pl">'
					+'<div class="head">'
					+'<img src="' + obj.head_icon + '" alt="">'
					+'</div>'
					+'<div class="p_descr">'
					+'<p>' + obj.proposal_name + '</p>'
					+'<p>编号#' + obj.id + '</p>'
					+'</div>'
				    +'</div>'
				    +'<div class="pr">'
					+'<div class="p_descr pr_descr">'
					+'<p>' + obj.rank + '名</p>'
					+'<p>' + obj.vote + '票</p>'
					+'</div>'
				    +'</div>'
				    +'<div class="motto">'
					+'' + obj.proposal_link + ''
					+'</div>';
			return str;
		},

		/**
		 * [拼接个人详细页投票者信息的字符串]
		 * @param  {Array} objs [投票者信息数组]
		 * @return {String}     [投票者信息字符串]
		 */
		detailVoterStr: function(objs) {
			var str = '';
			for(var i=0; i<objs.length; i++) {
				str += '<li>'
				    +'<div class="head">'
				    +'<img src="' + objs[i].head_icon + '" alt="">'
				    +'</div>'
				    +'<div class="up">'
				    +'<div class="vote">'
				    +'<span>投了一票</span>'
				    +'</div>'
				    +'</div>'
				    +'<div class="descr">'
				    +'<h3>' + objs[i].proposal_name + '</h3>'
				    +'<p>编号#' + objs[i].id + '</p>'
				    +'</div>'
				    +'</li>'
			}
			return str;
		},

		/**
		 * [发起投票请求]
		 * @param  {String} id      [被投票者id号]
		 * @param  {String} voterId [投票者id号]
		 * @param  {Element} _this  [元素]
		 */
		voteRequest: function(id, voterId, _this) {
			$.ajax({
				url: '/vote/index/poll?id=' + id + '&voterId=' + voterId,
				type: 'GET',
				success: function(data) {
					data = JSON.parse(data);
					if(data.errno === 0) {
						var voteNum = $(_this).siblings('.vote').children('span').html();
						var reg = /(\d*)/;
						voteNum = reg.exec(voteNum)[1];
						$(_this).siblings('.vote').children('span').html(++voteNum + '票');
						$(_this).siblings('.vote').addClass('bounceIn');
					}else {
						alert(data.msg);
					}
				}
			});
		},


		/**
		 * [投票事件绑定]
		 */
		userPoll: function() {
			$('.btn1').off();
			$('.btn1').click(function(event) {
				var _this = this;
				var id = $(this).attr('id');
				var vote_id = parseInt(id)-1;
				sendVote(vote_id,1);
				voteFn.setStorage('data', data);
				window.location.href="register?vote=0";			

			});
		},

		userOppose: function() {
			$('.btn2').off();
			$('.btn2').click(function(event) {
				var _this = this;
				var id = $(this).attr('id');
				var vote_id = parseInt(id)-1;
				sendVote(vote_id,2);
				voteFn.setStorage('data', data);
				window.location.href="register?vote=0";
			});
		},
		masterChange: function() {
			$('.entrust').off();
			$('.entrust').click(function(event) {
				var _this = this;
				var NewMasterAddr = $('.wallet_add').val();
				if((!NewMasterAddr)||(NewMasterAddr.length<40)) {
					alert("请填主节点委托投票地址");
					return false;
				}
				sendMaster(NewMasterAddr);
				voteFn.setStorage('data', data);
				window.location.href="register?vote=0";

			});
		},

		masterChangeen: function() {
			$('.entrust').off();
			$('.entrust').click(function(event) {
				var _this = this;
				var NewMasterAddr = $('.wallet_add').val();
				if((!NewMasterAddr)||(NewMasterAddr.length<40)) {
					alert("Please input the entrust wallet access");
					return false;
				}
				sendMaster(NewMasterAddr);
				voteFn.setStorage('data', data);
				window.location.href="registeren?vote=0";

			});
		},
		
		


		userPollen: function() {
			$('.btn1').off();
			$('.btn1').click(function(event) {
				var _this = this;
				var id = $(this).attr('id');
				var vote_id = parseInt(id)-1;
					sendVote(vote_id,1);
					voteFn.setStorage('data', data);
					window.location.href="registeren?vote=0";

			});
		},

		userOpposeen: function() {
			$('.btn2').off();
			$('.btn2').click(function(event) {
				var _this = this;
				var id = $(this).attr('id');
				var vote_id = parseInt(id)-1;
					sendVote(vote_id,2);
					voteFn.setStorage('data', data);
					window.location.href="registeren?vote=0";


			});
		},

		/**
		 * [获取提案数据]
		 * @return {Boolean} [数据是否合法]
		 */

		getRegisterData: function() {
			var proposal_name = $('.proposal_name').val();
			var proposal_link = $('.proposal_link').val();
			var addr 	  	= $('.addr').val();
			var applyAmount    = $('.applyAmount').val();

				if(!proposal_name) {
					alert("请填写提案名称");
					return false;
				}
				if(!proposal_link) {
					alert("请填写提案简介");
					return false;
				}
				if(!addr) {
					alert("请填写接收资助钱包地址");
					return false;
				}
				if(!applyAmount) {
					alert("请填写申请预算");
					return false;
				}
			
			return {
				proposal_name: proposal_name,
				proposal_link: proposal_link,
				addr: addr,
				applyAmount: applyAmount,
			}
		},

		getRegisterData_en: function() {
			var proposal_name = $('.proposal_name').val();
			var proposal_link = $('.proposal_link').val();
			var addr 	  	= $('.addr').val();
			var applyAmount    = $('.applyAmount').val();
	
			var ch_en=GetQueryString('language');

				if(!proposal_name) {
					alert("Please enter the proposal name");
					return false;
				}
				if(!proposal_link) {
					alert("Please enter the proposal link");
					return false;
				}
				if(!addr) {
					alert("Please enter the receiving wallet addres");
					return false;
				}
				if(!applyAmount) {
					alert("Please enter the funding amount");
					return false;
				}		
			return {
				proposal_name: proposal_name,
				proposal_link: proposal_link,
				addr: addr,
				applyAmount: applyAmount,
			}
		},

	};

	console.log(url);
	if(indexReg.test(url)|| url == "http://etzvote.com/" || url == "http://www.etzvote.com/"|| url == "https://etzvote.com/"|| url == "https://etzvote.com/") {
		sendVote = async(vote_id,vote_type) => {
			data = mycontract.methods.vote(vote_id,vote_type).encodeABI();
			}

		sendMaster = async(NewMasterAddr) => {
			data = mycontract.methods.delegate(NewMasterAddr).encodeABI();
			}

		mycontract.methods.getProposalsNum().call().then(function(result){
				gproposal_num = result;
				document.getElementById("gproposal_num").innerHTML = gproposal_num;
		});
		
		mycontract.methods.VoteIndex().call().then(function(result){
			VoteIndex = result;
			document.getElementById("num").innerHTML = result;
		});

		$.ajax({
			url: '/index/data?limit=1000&offset=0',
			type: 'GET',
			async: false,
			dataType:'json',
			success: function(data) {
				proposal_len = data.data.objects.length;
			}
		});

		/*主页*/
		var voteUser = voteFn.getStorage('voteUser');
		var limit=10;
		var offset=0;
		offset = proposal_len-limit;
		function aa(){
			$.ajax({
				url: '/index/data',
				data: {'limit': limit, 'offset': offset },
				type: 'GET',
				async: false,
				success: function(data) {
					//offset += limit;
					data = JSON.parse(data);
					document.getElementById("numetz").innerHTML = parseInt(data.data.totalbalance)/100;
					if(ch_en == 'en'){
						$('.coming').append(voteFn.userStr_en(data.data.objects));
					}
					else
					{
						$('.coming').append(voteFn.userStr(data.data.objects));
		
					}

					voteFn.userPoll();
					voteFn.userOppose();
					if(ch_en == 'en'){
						voteFn.userPollen();
						voteFn.userOpposeen();
					};
				}
			});
		}

		$(document).ready(function() {
			aa();
			if(ch_en == 'en'){
				voteFn.masterChangeen();
			}
			else{
				voteFn.masterChange();
			}
			
		});
var page_index;
$.ajax({
	url: '/index/data?limit=1000&offset=0',
	type: 'GET',
	async: false,
	dataType:'json',
	success: function(data) {
		var item = data.data.objects.length;
		$('#dark-pagination').pagination({
			items: item,
			itemsOnPage:10,
			cssStyle: 'dark-theme',
			// onInit: changePage,
            onPageClick: changePage,
			displayedPages: 2,
			edges: 2
		});
	}
});
	

function changePage(){
	page_index = $("#dark-pagination").pagination('getCurrentPage');
	//offset = (page_index-1)*10;
	offset = proposal_len-page_index*10;
	if(offset<0)
	{
		limit = 10+offset;
		offset=0;
	}
	else
	{
		limit =10;
	}
	console.log("offset+limit",offset,limit)
	$(".coming").empty();
	aa();
}


	$('.search span').click(function(event) {
			var searchContent = $('.search input').val();
			voteFn.setStorage('searchContent', searchContent);
			var seaechUrl = /(.*)index/.exec(url)[1] + 'search';
			window.location = seaechUrl;
		});

	} else if(registerReg.test(url)) {
		var data  = voteFn.getStorage('data');
		document.getElementById('txta').value = data;  //设置textarea的值  

		var rebtnFlag = true;

	$('.gender input').click(function(event) {
			$(this).attr('select', 'yes').parent('div').siblings('div').children('input').attr('select', 'no');
		});
	$('.rebtn').click(function(event) {

			if(!rebtnFlag) {
				return
			}
			rebtnFlag = false;
			console.log(ch_en);	
			if (ch_en == 'en')
			{
				var registerData = voteFn.getRegisterData_en();
			}			
			else
			{
				var registerData = voteFn.getRegisterData();
			}
			if(registerData == false) {
				rebtnFlag = true;
				return;
			}

			console.log("applyamount",registerData.applyAmount);
			//web3调用示例，register里面已经导入了1.0的web3且实例化了

			pName = registerData.proposal_name;
			pLink = registerData.proposal_link;
			pAmmount = (parseInt(registerData.applyAmount)*10**18).toLocaleString().replace(/,/g, '');

			console.log("applyamount1",pAmmount);

			pAddr = registerData.addr;
			sendTx1 = async() => {
				let fromAddr = await web3.eth.getCoinbase()
				await mycontract.methods.proposalSubmit(pName,pLink,pAmmount,pAddr).send({from: fromAddr,value:10000000000000000000});
				}
			sendTx1()
			
			return;
			$.ajax({
				url: '/index',
				type: 'POST',
				data: registerData,
				success: function(data) {
					data = JSON.parse(data);
					if(data.errno === 0) {
						var id = data.id;
						var reg = /(.*)register/;
						var voteUser = {
							proposal_name: registerData.proposal_name
						}
						voteFn.setStorage('voteUser', voteUser);
						alert(data.msg);
						//window.location = reg.exec(url)[1] + 'index';
					} else {
						alert('报名失败');
					}
				}
			})
		});

	} else if(searchReg.test(url)) {
		/*搜索页*/
		var searchContent = voteFn.getStorage('searchContent');

		$.ajax({
			url: '/index/search?content=' + searchContent,
			type: 'GET',
			success: function(data) {
				data = JSON.parse(data);
				if(data.data.length) {
					if(ch_en == 'en'){
						$('.coming').html(voteFn.userStrSearch_en(data.data));
					}
					else
					{
						$('.coming').html(voteFn.userStrSearch(data.data));	
					}
					voteFn.userPoll();
					voteFn.userOppose();
					if(ch_en == 'en'){
						voteFn.userPollen();
						voteFn.userOpposeen();
					};
				}else {
					$('.nodata').show();
				}
			}
		});

	} else if(detailReg.test(url)) {
		/*详情页*/
		var idReg = /.*?(\d*)$/;
		var id = idReg.exec(url)[1];
		$.ajax({
			url: '/all/detail/data?id=' + id,
			type: 'GET',

			success: function(data) {
				data = JSON.parse(data);
				if(data.errno == 0){
					$('.personal').html(voteFn.detailPersonalStr(data.data));
					$('.vflist').html(voteFn.detailVoterStr(data.data.vfriend))
				}else {
					alert(data.msg);
				}
			}
		});
	}
});
