
abi=[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"name","type":"string"},{"name":"link","type":"string"},{"name":"applyAmount","type":"uint256"},{"name":"sendPeriod","type":"uint256"},{"name":"voteNumYes","type":"uint256"},{"name":"voteNumNo","type":"uint256"},{"name":"voteNumAct","type":"uint256"},{"name":"adopted","type":"bool"},{"name":"passed","type":"bool"},{"name":"addr","type":"address"},{"name":"payedTimes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MasterAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VoteIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"setOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"preSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"proposalAddr","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"blockOrigin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"PreVoter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"sortedProposals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pname","type":"string"},{"name":"plink","type":"string"},{"name":"papplyAmount","type":"uint256"},{"name":"psendPeriod","type":"uint256"},{"name":"paddr","type":"address"}],"name":"proposalSubmit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"blockStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sortProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cycleIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"voteType","type":"uint256"},{"name":"proposalIndex","type":"uint256"},{"name":"votedIndex","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votePeriod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"voteType","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startRefresh","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"sendApply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"etzPerProposal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"masterNodeNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getProposalsNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"string"},{"indexed":true,"name":"link","type":"string"}],"name":"Submit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"Voteevent","type":"event"}];


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
			for(var i=0; i<objs.length; i++) {
				console.log(i);
				str += '<li>'
	                + '<div class="head">'
	                + '<a href="/vote/detail/' + objs[i].id + '">'
	                + '<img src="' + "/images/boy.png" + '" alt="">'
	                + '</a>'
	                + '</div>'
	                + '<div class="up">'
	                + '<div class="vote">'
	                + '<span>' + objs[i].voteNumYes + '票</span>'
					+ '</div>'
	                + '<div class="btn" id=' + objs[i].id + '>'
	                + '赞成'
					+ '</div>'
					+ '<div class="vote">'
	                + '<span>' + objs[i].voteNumNo + '票</span>'
					+ '</div>'
	                + '<div class="btn" id=' + objs[i].id + '>'
	                + '反对'
					+ '</div>'

	                + '</div>'
	                + '<div class="descr">'
	                + '<a href="/vote/detail/' + objs[i].id + '">'
	                + '<div>'
	                + '<span>' + objs[i].proposal_name + '</span>'
	                + '<span>|</span>'
	                + '<span>编号#' + objs[i].proposal_index + '</span>'
	                + '</div>'
					+ '<p>' +"提案链接："+objs[i].proposal_link + '</p>'
					+ '<p>' +"钱包地址："+ objs[i].addr + '</p>'
					+ '<p>' +"资助数量："+ objs[i].applyAmount +"                  发放周期："+ objs[i].sendPeriod + '</p>'
	                + '</a>'
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
			console.log("userPoll4");
			$('.btn').off();
			$('.btn').click(function(event) {
				var _this = this;
				var id = $(this).attr('id');
				console.log("id"+id);
				var voteUser = voteFn.getStorage('voteUser');
				window.location.href="register?vote=0";
				if (voteUser) {
					voteFn.voteRequest(id, voteUser.id, this);
				}else {
					$('.mask').show();
					voteFn.signIn();
				}

			});
		},

		userOppose: function() {
			$('.btn').off();
			$('.btn').click(function(event) {
				var _this = this;
				var id = $(this).attr('id');
				var voteUser = voteFn.getStorage('voteUser');
				window.location.href="register?vote=0";
				if (voteUser) {
					voteFn.voteRequest(id, voteUser.id, this);
				}else {
					$('.mask').show();
					voteFn.signIn();
				}

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
			var sendPeriod     = $('.sendPeriod').val();

			if(!proposal_name) {
				alert("请填写提案名称");
				return false;
			}
			if(!proposal_link) {
				alert("请填写提案链接地址");
				return false;
			}
			if(!addr) {
				alert("请填写接收资助钱包地址");
				return false;
			}
			if(!applyAmount) {
				alert("请填写资助数量");
				return false;
			}
			if(!sendPeriod) {
				alert("请填资助发放周期");
				return false;
			}
			return {
				proposal_name: proposal_name,
				proposal_link: proposal_link,
				addr: addr,
				applyAmount: applyAmount,
				sendPeriod: sendPeriod
			}
		},

	};

	if(indexReg.test(url)) {
		/*主页*/
		var voteUser = voteFn.getStorage('voteUser');

		$.ajax({
			url: '/vote/index/data?limit=10&offset=0',
			type: 'GET',
			success: function(data) {
				offset += limit;
				data = JSON.parse(data);
				$('.coming').append(voteFn.userStr(data.data.objects));
				console.log("userPoll2");
				voteFn.userPoll();
			}
		});
		loadMore({
			callback: function(load){
		        $.ajax({
		            url: '/vote/index/data?limit=' + limit + '&offset=' + offset,
		            type: 'GET',
		            success: function(data) {
		                data = JSON.parse(data);
		                var total = data.data.total;
						var objs = data.data.objects;
						console.log("offset"+offset);
		                if (offset < total) {
		                    setTimeout(function(){
		                    	offset += limit;
		                        $('.coming').append(voteFn.userStr(objs));
								voteFn.userPoll();
								voteFn.userOppose();
		                        load.reset();
		                    }, 1000)
		                }else {
		                    load.complete();
		                    setTimeout(function(){
		                        load.reset();
		                    }, 1000)
		                }
		            }
		        })
		    }
		});
		$('.search span').click(function(event) {
			var searchContent = $('.search input').val();
			voteFn.setStorage('searchContent', searchContent);
			var seaechUrl = /(.*)index/.exec(url)[1] + 'search';
			window.location = seaechUrl;
		});

	} else if(registerReg.test(url)) {
		/*提交提案*/
		sendTx = async() => {
			let fromAddr = await web3.eth.getCoinbase()
			var mycontract = new web3.eth.Contract(abi,"0xc1e47b18030d373c6c21106a63c5621972621461");
			await mycontract.methods.proposalSubmit(pName,pLink,pAmmount,pPeriod,pAddr).send({from: fromAddr});
			}

		var rebtnFlag = true;

		$('.gender input').click(function(event) {
			$(this).attr('select', 'yes').parent('div').siblings('div').children('input').attr('select', 'no');
		});
		$('.rebtn').click(function(event) {


			if(!rebtnFlag) {
				return
			}
			rebtnFlag = false;
			var registerData = voteFn.getRegisterData();
			if(registerData == false) {
				rebtnFlag = true;
				return;
			}

			//web3调用示例，register里面已经导入了1.0的web3且实例化了
			sendTx()
			pName = registerData.proposal_name;
			pLink = registerData.proposal_link;
			pAmmount =parseInt(registerData.applyAmount);
			pPeriod = parseInt(registerData.sendPeriod);
			pAddr = registerData.addr;
			// mycontract.proposalSubmit.sendTransaction(pName,pLink,pAmmount,pPeriod,pAddr,function(){
			// 	mycontract.methods.proposalSubmit().encodeABI()
			// })
			return;
			$.ajax({
				url: '/vote/index',
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
			url: '/vote/index/search?content=' + searchContent,
			type: 'GET',
			success: function(data) {
				data = JSON.parse(data);
				if(data.data.length) {
					$('.coming').html(voteFn.userStr(data.data));
					console.log("userPoll3");
					voteFn.userPoll();
					voteFn.userOppose();
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
			url: '/vote/all/detail/data?id=' + id,
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
