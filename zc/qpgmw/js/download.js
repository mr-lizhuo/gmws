//自动判断类型下载
function download(siteID,source){
	var phoneType=0;
	if(navigator.userAgent.indexOf("iPhone") != -1||navigator.userAgent.indexOf("iPad") != -1){
	 	//苹果手机
		phoneType=0;
	 }else if(navigator.userAgent.indexOf("Android") != -1){	
		//安卓手机
		phoneType=1;
	 }else {
		 //PC
		phoneType=2; 
	 }
	
	var downLoadUrl=ctx+"/downLoad.do?phoneType="+phoneType+"&siteID="+siteID;
	location.href=downLoadUrl;
	//统计下载
	statistics(siteID,phoneType,source);
}
//自动判断类型下载
function download4(siteID,source,gameType){
	var phoneType=0;
	if(navigator.userAgent.indexOf("iPhone") != -1||navigator.userAgent.indexOf("iPad") != -1){
	 	//苹果手机
		phoneType=0;
	 }else if(navigator.userAgent.indexOf("Android") != -1){	
		//安卓手机
		phoneType=1;
	 }else {
		 //PC
		phoneType=2; 
	 }
	
	var downLoadUrl=ctx+"/downLoad.do?phoneType="+phoneType+"&siteID="+siteID+"&gameType="+gameType;
	location.href=downLoadUrl;
	//统计下载
	statistics(siteID,phoneType,source);
}
//指定类型下载
function download2(siteID,type,source){
	//type为0是正式苹果，type为3为越狱
	var downLoadUrl=ctx+"/downLoad.do?phoneType="+type+"&siteID="+siteID;
	location.href=downLoadUrl;
	if(type==4&&source=='PC')//电脑精简版下载
	{
		type = 2; //统计到PC端下载
	}
	//统计下载
	statistics(siteID,type,source);
	
}
//指定类型下载
function download3(siteID,type,source,gameType){
	//gameType
	var downLoadUrl=ctx+"/downLoad.do?phoneType="+type+"&siteID="+siteID+"&gameType="+gameType;
	location.href=downLoadUrl;
	
	//统计下载
	statistics(siteID,type,source);
	
}
//自动判断类型下载
function downloadType(siteID,source){
	
	if(navigator.userAgent.indexOf("iPhone") != -1||navigator.userAgent.indexOf("iPad") != -1){
	 	//苹果手机
		$('.box').add('.bg').show();
	 }else if(navigator.userAgent.indexOf("Android") != -1){	
		//安卓手机
		download(siteID,source);
	 }else {
		 //PC
//		 $('.box').add('.bg').show();
		 download(siteID,source);
	 }
}

//自动判断类型下载
function downloadType2(siteID,source,gameType){
	if(navigator.userAgent.indexOf("iPhone") != -1||navigator.userAgent.indexOf("iPad") != -1){
	 	//苹果手机
		$('.box').add('.bg').show();
	 }else if(navigator.userAgent.indexOf("Android") != -1){	
		//安卓手机
		download4(siteID,source,gameType);
	 }else {
		 //PC
//		 $('.box').add('.bg').show();
		 download4(siteID,source,gameType);
	 }
}

//判断是否为移动客户端和safari浏览器
function checkIsYDAndSafari() {
	var userAgentInfo = navigator.userAgent.toLowerCase();
	var app = navigator.appVersion.toLowerCase(); 
	var Agents = new Array("android", "iphone", "symbianos","windows phone", "ipad", "ipod");
	var flag = false;
	for ( var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = true;
		}
	}
	//判断浏览器是不是safari浏览器
	if(userAgentInfo.indexOf("linux")>0 || userAgentInfo.indexOf("safari")<0){
		flag = false;
	}
	return flag;
}

//数据统计
function statistics(siteID,type,source){
	//type:0.正式苹果下载 1.手机安卓下载 2.PC安卓下载 3.越狱苹果下载 4.官网访问
	//source:PC、PHONE、CODE
	var downLoadUrl=ctx+"/statistics.do?type="+type+"&siteID="+siteID+"&source="+source;
	$.ajax({
		type : "post",
		url : downLoadUrl,
		async: false,
		dataType : "json",
		data:{"siteID": siteID,"source": source,"type": type},
		success : function(data) {
			
		}
	});
	
}

$(function (){
	/*下载弹框*/
	$('.btn_ap').click(function() {
		$('.iPhoneBox').openPop();
	});
	$('.close_btn').click(function() {
		$('.iPhoneBox').closePop();
	});
	//重置手机号码
	$("#mobile").focus(function(e) {
		var mobileTxt = $(this).val();
		if(mobileTxt == "请输入手机号..."){
      		$(this).val('');
		}
    }).blur(function(){
    	var mobileTxt = $(this).val();
    	if(mobileTxt == ""){
    		 $(this).val('请输入手机号...');
		}
    });
	
	$("#btSend").hide();
	
	//发送短信
	$('#smsDownload').click(function(){
		sendCode();
	});
});

//向手机发送验证码
var canSendCode = true;
function sendCode() {
	if(canSendCode){
		canSendCode = false;
	var mobile = Trim($("#mobile").val());
	$.ajax({
		type : "post",
		url : ctx + "/sendMsg/sendDownloadUrl.do?timestamp=" + new Date().getTime(),
		data : {
			"mobile" : mobile
		},
		cache : false,
		dataType : "json",
		success : function(data) {
			canSendCode = true;
			if (data.retCode == 0) {
				showLogin();
				return;
			} else if (data.retCode == -1) {
				alert("手机号码不合法！");
				return;
			} else if (data.retCode == -2) {
				alert("发送短信的时间间隔没到！");
				countDownPerSecond(data.needWaitTimeLeft);
			} else if (data.retCode == -3) {
				alert("系统操作异常！");
				return;
			} else if (data.retCode == -4) {
				alert("发送短信失败！");
				return;
			}else if(data.retCode==-5){
				alert('对不起，您今天发送短信次数已达到上线，请明天再来哦！');
			} else if (data.retCode == 1) {
				countDownPerSecond(data.needWaitTimeLeft);
			}
		}
	});
	}
}

/**
 * 按秒倒计时
 */
var a;
function countDownPerSecond(secondLeft) {

	$("#mobile").attr("readonly", "readonly");
	$("#smsDownload").hide();
	$("#countDown").show();
	//倒计时结束
	if (secondLeft == "-1") {
		clearTimeout(a);
		$("#mobile").removeAttr("readonly");
		//按钮显示出来
		$("#countDown").hide();
		$("#smsDownload").show();
		return;
	}
	//显示时间
	$("#countDown").html("&nbsp;&nbsp;"+secondLeft + "后重新获取!");
	a = setTimeout(function() {countDownPerSecond(parseInt(secondLeft) - 1);
	}, 1000);
}
/**
 * 验证手机号
 * 
 * @param obj
 * @return
 */
function checkMobilePhone(obj) {

	var partten = /^1[3-8]\d{9}/;

	if (partten.test(obj)) {
		return true;
	} else {
		return false;
	}
}