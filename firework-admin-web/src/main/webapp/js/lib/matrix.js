$(document).ready(function(){$(".menu_a").click(function(a){$("#iframe-main").attr("src",$(this).attr("link"));$(".menu_a").parent("li").removeClass("active");$(this).parent("li").addClass("active")});$("#sidebar li.submenu > a").click(function(a){a.preventDefault();var e=$(this).siblings("ul");var j=$(this).parents("li");var i=$("#sidebar li.submenu ul");var b=$("#sidebar li.submenu");if(j.hasClass("open")){if(($(window).width()>768)||($(window).width()<479)){e.slideUp()}else{e.fadeOut(250)}j.removeClass("open")}else{if(($(window).width()>768)||($(window).width()<479)){i.slideUp();e.slideDown()}else{i.fadeOut(250);e.fadeIn(250)}b.removeClass("open");b.find("i.noline_open").each(function(){$(this).removeClass("noline_open").addClass("noline_close")});j.addClass("open")}});$("#sidebar li.submenu ul li.thirdmenu > a").click(function(a){a.preventDefault();var j=$(this).siblings("ul");var l=$(this).parent("li");var k=$("#sidebar li.submenu ul li.thirdmenu ul");var b=$("#sidebar li.submenu ul li.thirdmenu");var e=l.find("i").eq(0);if(l.hasClass("open")){if(($(window).width()>768)||($(window).width()<479)){j.slideUp()}else{j.fadeOut(250)}l.removeClass("open");if(e.hasClass("noline_open")){e.removeClass("noline_open").addClass("noline_close")}}else{if(($(window).width()>768)||($(window).width()<479)){k.slideUp();j.slideDown()}else{k.fadeOut(250);j.fadeIn(250)}b.removeClass("open");b.find("i.noline_open").each(function(){$(this).removeClass("noline_open").addClass("noline_close")});l.addClass("open");if(e.hasClass("noline_close")){e.removeClass("noline_close").addClass("noline_open")}}});var d=$("#sidebar > ul");$(window).resize(function(){if($(window).width()>479){d.css({display:"block"});$("#content-header .btn-group").css({width:"auto"})}if($(window).width()<479){d.css({display:"none"});c()}if($(window).width()>768){$("#user-nav > ul").css({width:"auto",margin:"0"});$("#content-header .btn-group").css({width:"auto"})}});if($(window).width()<468){d.css({display:"none"});c()}if($(window).width()>479){$("#content-header .btn-group").css({width:"auto"});d.css({display:"block"})}$(".tip").tooltip();$(".tip-left").tooltip({placement:"left"});$(".tip-right").tooltip({placement:"right"});$(".tip-top").tooltip({placement:"top"});$(".tip-bottom").tooltip({placement:"bottom"});function c(){var b=$("#user-nav > ul").width();$("#user-nav > ul").css({width:b,"margin-left":"-"+b/2+"px"});var a=$("#content-header .btn-group").width();$("#content-header .btn-group").css({width:a,"margin-left":"-"+b/2+"px"})}$("#style-switcher i").click(function(){if($(this).hasClass("open")){$(this).parent().animate({marginRight:"-=190"});$(this).removeClass("open")}else{$(this).parent().animate({marginRight:"+=190"});$(this).addClass("open")}$(this).toggleClass("icon-arrow-left");$(this).toggleClass("icon-arrow-right")});$("#style-switcher a").click(function(){var a=$(this).attr("href").replace("#","");$(".skin-color").attr("href","css/maruti."+a+".css");$(this).siblings("a").css({"border-color":"transparent"});$(this).css({"border-color":"#aaaaaa"})});$(".lightbox_trigger").click(function(a){a.preventDefault();var e=$(this).attr("href");if($("#lightbox").length>0){$("#imgbox").html('<img src="'+e+'" /><p><i class="icon-remove icon-white"></i></p>');$("#lightbox").slideDown(500)}else{var b='<div id="lightbox" ><div id="imgbox"><img src="'+e+'" /><p><i class="icon-remove icon-white"></i></p></div></div>';$("body").append(b);$("#lightbox").slideDown(500)}});$("#lightbox").live("click",function(){$("#lightbox").hide(200)})});