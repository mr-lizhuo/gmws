//js
$(function(){
	
	//nav fixed
	$('#nav').css('z-index','9999');
	 var $navTop = $('#nav').offset().top,$h = $(window).height(), IE6;

	IE6 = (window.ActiveXObject) && (!window.XMLHttpRequest)
	$(window).bind('scroll',function(){
		var $scrollTop = $(window).scrollTop(),
			$scrollY = $scrollTop - $navTop;

		if($scrollTop > $navTop){
			if(!IE6){
				$('#nav').css({
					position:'fixed',
					top:'0',
					left:'0'
				})
			}else{
				$('#nav').css({
					position:'absolute',
					top:'0',
					left:'0'
				})
			}

			$('.header').css('margin-bottom','65px');

		}else {
			if(!IE6){
			$('#nav').css({
				position:'relative',
				bottom:'0',
				left:'0'
			}) }else {
				$('#nav').css({
					position:'relative',
					top:'0',
					left:'0'
				})
			}
			$('.header').css('margin-bottom','5px')
		}

	})
	
	 	   
	//首页选项卡 tab切换
	var iCur=0;
	$('.tab_small li').click(function(){
		iCur=$(this).index();
		reSet(iCur);
	});
	
	$('.tab_box').mouseover(function(){
		clearInterval(timer);								 
	});
	$('.tab_box').mouseout(function(){
		timer=setInterval(function(){
			iCur++;
			if(iCur==5){
				iCur=0;
			}
			reSet(iCur);
		},5000)							 
	});
	
	
	timer=setInterval(function(){
		iCur++;
		if(iCur==5){
			iCur=0;
		}
		reSet(iCur);
	},5000)
	function reSet(iCur){
		$('.tab_small li').removeClass('focus').eq(iCur).addClass('focus');
		$('.tab_big li').hide().eq(iCur).show();
	}
	
	
	//tab share btn 
	$('.tab_big li').each(function(){
		var contId, title, picUrl, portalUrl, description;
		var id = $(this).attr("id");
		contId = id.substring(4, id.length);
		title = "【"+$.trim($(this).find(".title a").text())+"】";
		description =$.trim($(this).find(".zy").text());
		if ($(this).find("img")[0]) {
			picUrl = $(this).find("img")[0].src;
			picUrl = $.trim(picUrl);
		}
		portalUrl = $(this).find(".title a").attr("href"); 
		title = "'" + title + "'";
		picUrl = "'" + picUrl + "'";
		portalUrl = "'" + portalUrl + "'";
		description = "'" + description + "'";
	
	
			$(this).append(
				'<div class="share_live24">\
					<a href="javascript:showToTencent(' + contId + ',' + title + ',' + picUrl + ',' + portalUrl + ',' + description + ');" id="share_share01"></a>\
					<a href="javascript:showToSina(' + contId + ',' + title + ',' + picUrl + ',' + portalUrl + ',' + description + ');" id="share_share02" ></a>\
					<a href="javascript:showToQzone(' + contId + ',' + title + ',' + picUrl + ',' + portalUrl + ',' + description + ');" id="share_share03"></a>\
					<span>分享到&nbsp;&nbsp;</span>\
				</div>'
			);							   
	});
});

$(function(){
	$(".each_news").each(function() {
		var id = $(this).attr("id");
		var contId, title, picUrl, portalUrl, description;
		contId = id.substring(4, id.length);
		title = $(this).find(".title").text();
		title = $.trim(title);
		title = "【"+title+"】";
		description = $(this).find(".zy").text();
		description = $.trim(description);
		description = description;
		if ($(this).find("img")[0]) {
			picUrl = $(this).find("img")[0].src;
			picUrl = $.trim(picUrl);
		}
		portalUrl = $(this).find(".title a").attr("href"); 
		title = "'" + title + "'";
		picUrl = "'" + picUrl + "'";
		portalUrl = "'" + portalUrl + "'";
		description = "'" + description + "'";
		var _this=$(this);
		$(this).hover(function() {
			$("#cont" + contId).css("background","#f1f1f1");

			_this.append(
				'<div class="share_live24" id="share">\
					<a href="javascript:showToTencent(' + contId + ',' + title + ',' + picUrl + ',' + portalUrl + ',' + description + ');" id="share_share01"></a>\
					<a href="javascript:showToSina(' + contId + ',' + title + ',' + picUrl + ',' + portalUrl + ',' + description + ');" id="share_share02" ></a>\
					<a href="javascript:showToQzone(' + contId + ',' + title + ',' + picUrl + ',' + portalUrl + ',' + description + ');" id="share_share03"></a>\
					<span>分享到&nbsp;&nbsp;</span>\
				</div>'
			);
		}, function() {
			_this.css("background", "none");
			$("#share").remove();
		});
	});

});






function showToQzone(contId,title,picUrl,portalUrl,desc){
		var _t = title;
		var _desc = desc;
		var _url = portalUrl;
		var _appkey = "801495950";//你从腾讯获得的appkey
		var _pic = picUrl;//（例如：var _pic='图片url1|图片url2|图片url3....）
		var _site = '';//你的网站地址
		var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&appkey='+_appkey+'&summary='+_desc+'&pic='+_pic+'&title='+_t;
		window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToSina(contId,title,picUrl,portalUrl,desc){
	    var _desc = desc;
		var _t = title+" "+_desc;
		var _url = portalUrl;
		var _appkey = "288713144";//你从微薄获得的appkey
		var _pic = picUrl;
		var _site = '';//你的网站地址
		var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t;
		window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToTencent(contId,title,picUrl,portalUrl,desc){
		var _desc = desc;
		var _t = title+" "+_desc;
		var _url = portalUrl;
		var _appkey = "801495950";//你从腾讯获得的appkey
		var _pic = picUrl;//（例如：var _pic='图片url1|图片url2|图片url3....）
		var _site = '';//你的网站地址
		var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t;
		window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}


//添加到收藏夹
function addFavorite(url,title) {
	try {
		window.external.addFavorite(url,title);
	}
	catch (e) {
		try {
			window.sidebar.addPanel(title,url,'');
		}
		catch (e) {
			alert("请按 Ctrl+D 键添加到收藏夹");
		}
	}
}
function more(){
   var i=0;
   $(".load_more").click(function(){
     i=i+1;
	 if(i>0&&i<$(".main_list").length-1){
	      if($(".main_list").eq(i+1).children(".each_news").length!=0){
			  $(".main_list").eq(i).show();
			  $(".load_more").show();
		  }else{
			   $(".main_list").eq(i).show();
			    $(".load_more").hide();
			  }
	  }else if(i=$(".main_list").length-1){
		   if($(".main_list").eq(i).children(".each_news").length!=0){
			  $(".main_list").eq(i).show();
			  $(".load_more").hide();
			  $(".more_load").show();
		  } 
		}
   });  
}

//左侧评论限字数
(function(){

	$('.news_box p').each(function(){
		var maxwidth=24;
		if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+'…');
		}
	});
})();

