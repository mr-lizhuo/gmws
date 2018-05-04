$(function(){
	var index=0,
	     repeat,
		 len=$(".pad li").length;
   $(".slider").hover(function(){
       clearInterval(repeat);
	  $(".pad li").mouseover(function(){
		  var index=$(".pad li").index(this);
		   imgshow(index);
	})
   },function(){
    repeat=setInterval(function(){
	  imgshow(index);
	  index++;
	  if(index==len)
	  index=0;  
	},3000)
  }).trigger("mouseleave")
  function imgshow(index){
    $(".pic li").eq(index).fadeIn("on").siblings().fadeOut("on");
	$(".pic_title p").eq(index).show().siblings().hide();
	$(".pad>li").eq(index).addClass("on").siblings().removeClass("on");
  }
  //文字无缝滚动
  $(".marquee-left .bd").kxbdSuperMarquee({
		isMarquee:true,
		isEqual:false,
		scrollDelay:100,
		direction:'left'
	});
  
  $('.poster-wrap').kxbdSuperMarquee({
		distance:190,
		time:3,
		btnGo:{left:'.poster-prev-btn',right:'.poster-next-btn'},
		direction:'left'
	});

  
  
});


//分享按钮
$(function(){
	$(".left_list").each(function() {
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
			$("#cont" + contId).css("background","#F1F1F1");
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
//大千世界
$(function(){
	var index1=0,
	     repeat1,
		 len1=$(".gun_num li").length;
   $(".gun_pic").hover(function(){
       clearInterval(repeat1);
	  $(".gun_num li").mouseover(function(){
		  var index1=$(".gun_num li").index(this);
		   imgshow1(index1);
	})
   },function(){
    repeat1=setInterval(function(){
	  imgshow1(index1);
	  index1++;
	  if(index1==len1)
	  index1=0;  
	},3000)
  }).trigger("mouseleave")
  function imgshow1(index1){
    $(".gun_pic li").eq(index1).fadeIn("on").siblings().fadeOut("on");
	$(".gun_num>li").eq(index1).addClass("on").siblings().removeClass("on");
  }
})

