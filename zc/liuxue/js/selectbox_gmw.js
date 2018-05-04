<!-- 选项卡1-->
function selectbox(f) {
  return document.getElementById(f);
}

function selcon(f,m,w,j) {
  for(l=0;l<j;l++) {
    selectbox(f+l).className='selectbox_nav_hidden';
    selectbox(m+l).style.display='none';
  }
  selectbox(f+w).className='selectbox_nav';	
  selectbox(m+w).style.display='block';
}



<!-- 选项卡2-->
var _st = window.setTimeout;
window.setTimeout = function(fRef, mDelay) 
	{
		if(typeof fRef == 'function')
			{
				var argu = Array.prototype.slice.call(arguments,2);
				var f = (function(){ fRef.apply(null, argu); });
				return _st(f, mDelay);
			}
		return _st(fRef,mDelay);
	}


function GetObj(objName)
	{
		if(document.getElementById)
			{
				return eval('document.getElementById("' + objName + '")');
			}
		else if(document.layers)
			{
				return eval("document.layers['" + objName +"']");
			}
		else
			{
				return eval('document.all.' + objName);
			}
	}



function SetLbl(preFix, idx,start,end,cssl,cssr)
	{
		window.setTimeout(aa,300,preFix, idx,start,end,cssl,cssr);
	}
			
function aa(preFix, idx,start,end,cssl,cssr)
	{
		for(var i=start;i<end;i++)
			{
														
				if(GetObj(preFix+"_lbl_"+i)) GetObj(preFix+"_lbl_"+i).className =cssr;
				if(GetObj(preFix+"_con_"+i)) GetObj(preFix+"_con_"+i).style.display = "none";
			}
			
				
	GetObj(preFix+"_lbl_"+idx).className =cssl;
	GetObj(preFix+"_con_"+idx).style.display = "block";
	}




			
				
function SetLbl_s(preFix, idx,start,end,cssl,cssr)
	{
		window.setTimeout(aas,300,preFix, idx,start,end,cssl,cssr);
	}
			
function aas(preFix, idx,start,end,cssl,cssr)
	{
		for(var i=start;i<end;i++)
			{
														
				if(GetObj(preFix+"_lbls_"+i)) GetObj(preFix+"_lbls_"+i).className =cssr;
				if(GetObj(preFix+"_cons_"+i)) GetObj(preFix+"_cons_"+i).style.display = "none";
			}

		GetObj(preFix+"_lbls_"+idx).className =cssl;
		GetObj(preFix+"_cons_"+idx).style.display = "block";
	}

<!-- 选项卡3(摘要使用)-->
function abstractab(w,l,j) {
  for(i=0;i<j;i++) {
    document.getElementById(w+"S"+i).className='selectabs_nav_hidden';
    document.getElementById(w+"C"+i).style.display='none';
  }	
  document.getElementById(w+"S"+l).className='selectabs_nav';
  document.getElementById(w+"C"+l).style.display='block';
}