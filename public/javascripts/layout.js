function create(){
	$('#create_con').css("display", "block");
	$('#command_con').css("display", "none");
	$('#info_con').css("display", "none");
	$('#list_con').css("display", "none");
	$('.con_left li').removeClass('active');
	$('#create').parent('li').addClass('active');
};
function command(){
	$('#create_con').css("display", "none");
	$('#command_con').css("display", "block");
	$('#info_con').css("display", "none");
	$('#list_con').css("display", "none");
	$('.con_left li').removeClass('active');
	$('#command').parent('li').addClass('active');
};
function info(){
	$('#create_con').css("display", "none");
	$('#command_con').css("display", "none");
	$('#info_con').css("display", "block");
	$('#list_con').css("display", "none");
	$('.con_left li').removeClass('active');
	$('#info').parent('li').addClass('active');
};
function list(){
	$('#create_con').css("display", "none");
	$('#command_con').css("display", "none");
	$('#info_con').css("display", "none");
	$('#list_con').css("display", "block");
	$('.con_left li').removeClass('active');
	$('#list').parent('li').addClass('active');
};

$('.con_left li').click(function(e) {
	$('.con_left li').removeClass('active');
	$(this).addClass('active');
});

$('.info_btn button').click(function(e) {
	$('.info_btn button').attr("disabled","disabled");
	$('.info_btn button').css("background", "#999999");
	alert("您已经投票成功！");
});

function paste(){
	info();
}


$(document).ready(function() {
	$('.navbar-nav > li').click(function(e) {
		//e.preventDefault();  
		$('.navbar-nav > li').removeClass('active');
		$(this).addClass('active');

	});
});


$(document).ready(function() {
	$('.dropdown-menu li').click(function(e) {
		//e.preventDefault();  
		$('.dropdown-menu li').removeClass('active');
		$(this).addClass('active');

	});
});

$(function() {

	judescreen();
	$(window).resize(function() {
		judescreen();
	});

	function judescreen() {

		var winW = $(window).width();

		if(winW < 768) {
			$(".header-nav ul li").unbind("mouseenter");
			$(".header-nav ul li").unbind("mouseleave");
			$(".header-nav").hide();
			$(".dropdown-menu ").hide();
			
			$(".mobnav-btn").unbind("click").bind("click", function() {
				if($(".header-nav").is(":hidden")) {
					$(this).addClass("g_close");
					$(".header-nav").show();
				} else {
					$(".header-nav").hide();
					$(this).removeClass("g_close");
				}

			});
			$(".navbar-nav li a").unbind("click").bind("click", function() {					
					$(".header-nav").hide();
					$(".mobnav-btn").removeClass("g_close");

			});
			
			$(".dropdown-toggle").unbind("click").bind("click", function() {
				if($(".dropdown-menu ").is(":hidden")) {
					$(".dropdown-menu ").show();
				} else {
					$(".dropdown-menu ").hide();
					
				}
			});
			$('.header-nav ul li p').click(function(){
				$('.header-nav').hide();
			});
			
	}
	}
});


// function vote_href(){
// 	$('#create_con').hide();
// 	$('#command_con').show();
// 	$('#info_con').css("display", "none");
// 	$('#list_con').css("display", "none");
// 	$('.con_left li').removeClass('active');
// 	$('#create').parent('li').addClass('active');
// };
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
// window.onload =  function() {

// }