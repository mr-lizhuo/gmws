var index = 0;

function getEleId(o){
	return (typeof o == "object") ? o : document.getElementById(o);
}

function getAllNames(obj,name,tij){
	var plist = getEleId(obj).getElementsByTagName(tij);
	var rlist = new Array();
	for(i=0;i<plist.length;i++){
		if(plist[i].getAttribute("name") == name){
			rlist[rlist.length] = plist[i];
		}
	}
	return rlist;
}
function fiterplay(obj,num,t,name,c1,c2){
	var fitlist = getAllNames(obj,name,t);
	for(i=0;i<fitlist.length;i++){
		if(i == num)
			fitlist[i].className = c1;
		else
			fitlist[i].className = c2;
	}
}
function play(obj,num){
	var s = getEleId('simg');
	var i = getEleId('info');
	var b = getEleId('bimg');
	try	{
		with(b){
			filters[0].Apply();	
			fiterplay(b,num,"div","f","dis","undis");	
			fiterplay(s,num,"div","f","","f1");
			fiterplay(i,num,"div","f","dis","undis");
			filters[0].play();
		}
	}catch(e){
		fiterplay(b,num,"div","f","dis","undis");
		fiterplay(s,num,"div","f","","f1");	
		fiterplay(i,num,"div","f","dis","undis");
	}
	index = num;
}

var autoStart = 0;
var n = 0;//当前激活的index
var s = getEleId("simg");
var x = getAllNames(s,"f","div");
var scnum = 1;
function clearAuto() {
	clearInterval(autoStart);
}
function setAuto() {
	autoStart = setInterval("auto(index)", 3000)
}
function auto()	{
	index++;
	if(index>(x.length-1)){
		index = 0;
		scnum++;
		if(scnum>6){
			clearAuto();
		}
	}
	play(x[index],index);
}
function autoback()	{
	index--;
	if(index <0){
		index = x.length-1;
		scnum++;
		if(scnum>6){
			clearAuto();
		}
	}
	play(x[index],index);
}
function ppp(){
	setAuto();
}
ppp();

getEleId("bimg").onmouseover = function() {clearAuto();}
getEleId("bimg").onmouseout = function() {ppp();}
getEleId("info").onmouseover = function() {clearAuto();}
getEleId("info").onmouseout = function() {ppp();}
getEleId("simg").onmouseover = function() {clearAuto();}
getEleId("simg").onmouseout = function() {ppp();}
getEleId("nextbtn").onmouseover = function() {clearAuto();}
getEleId("nextbtn").onmouseout = function() {ppp();}
getEleId("nextbtn").onmouseup = function() {auto();}
getEleId("prebtn").onmouseover = function() {clearAuto();}
getEleId("prebtn").onmouseout = function() {ppp();}
getEleId("prebtn").onmouseup = function() {auto();}

