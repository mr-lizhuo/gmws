$(function(){
	$(".right_part2 .top_news").find("li:last").addClass("strong_line");
	//$(".left_part1 .arc_list_t1").find("li:first").addClass("strong");
	//左侧两个滚动
	$(".marquee2").kxbdSuperMarquee({
		isMarquee:true,
		isEqual:false,
		scrollDelay:100,
		direction:'up'
	});
	//分享
	
	$(".right_part2 .arc_list").find("li").each(function() {
		var title, picUrl, portalUrl, description;
		title = $(this).find(".title_arc").text();
		title = $.trim(title);
		title = "【"+title+"】";
		description = $(this).find("p").text();
		description = $.trim(description);
		description = description;
		//picUrl = $(this).find(".pic_box").find("img").eq(0).src;
		portalUrl = $(this).find(".title_arc").find("a").attr("href");
		title = "'" + title + "'";
		//picUrl = "'" + picUrl + "'";
		portalUrl = "'" + portalUrl + "'";
		description = "'" + description + "'";

		var _this=$(this);
		$(this).hover(function() {
			_this.addClass("hover");
			_this.append(
				'<div class="share_live24 clearfix" id="share">\
				    <span>分享到&nbsp;&nbsp;</span>\
					<a href="javascript:showToTencent(' + title + ',' + picUrl + ',' + portalUrl + ',' + description + ');" id="share_share01"></a>\
					<a href="javascript:showToSina('  + title + ',' + picUrl + ',' + portalUrl + ',' + description + ');" id="share_share02" ></a>\
					<a href="javascript:showToQzone(' + title + ',' + picUrl + ',' + portalUrl + ',' + description + ');" id="share_share03"></a>\
				</div>'
			);
		}, function() {
			_this.removeClass("hover");
			$("#share").remove();
		});
	});
	//TAB切换
	jQuery.jqtab = function(tabtit,title_tag,tab_conbox,conbox_tag,shijian) {
		$(tab_conbox).children(conbox_tag).hide();
		$(tab_conbox).children(conbox_tag).eq(0).show();
		$(tabtit).find(title_tag).eq(0).addClass("selected");

		$(tabtit).find(title_tag).bind(shijian,function(){
			$(this).addClass("selected").siblings(title_tag).removeClass("selected");
			var activeindex = $(tabtit).find(title_tag).index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			//return false可以阻止A标签跳转
			//return false;
		});
	};
	/*调用方法如下：*/
	$.jqtab(".tab_title1","li",".tab_cont1","li","hover");

});
function showToQzone(title,picUrl,portalUrl,desc){
	var _t = title;
	var _desc = desc;
	var _url = portalUrl;
	var _appkey = "801495950";//你从腾讯获得的appkey
	var _pic = picUrl;//（例如：var _pic='图片url1|图片url2|图片url3....）
	var _site = '';//你的网站地址
	var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&appkey='+_appkey+'&summary='+_desc+'&pic='+_pic+'&title='+_t;
	window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToSina(title,picUrl,portalUrl,desc){
	var _desc = desc;
	var _t = title+" "+_desc;
	var _url = portalUrl;
	var _appkey = "288713144";//你从微薄获得的appkey
	var _pic = picUrl;
	var _site = '';//你的网站地址
	var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t;
	window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToTencent(title,picUrl,portalUrl,desc){
	var _desc = desc;
	var _t = title+" "+_desc;
	var _url = portalUrl;
	var _appkey = "801495950";//你从腾讯获得的appkey
	var _pic = picUrl;//（例如：var _pic='图片url1|图片url2|图片url3....）
	var _site = '';//你的网站地址
	var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t;
	window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}