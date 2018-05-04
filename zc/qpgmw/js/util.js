/**删除字符串中的空格*/
function Trim(sText) 
{ 
    return sText.replace(new RegExp("(^[\\s]*)|([\\s]*$)", "g"), ""); 
}
//验证身份证号
function  checkIdcard(idcard){   
	
	if(Trim(idcard)=="111111111111111"){
		return "身份证号码非法";
	}
	
	var nowDate = new Date(); 
	var nowYear = nowDate.getYear();
	nowYear = (nowYear<1900?(1900+nowYear):nowYear);   
	
	var   Errors=new  Array(   
	"success",   
	"身份证号码位数不对",   
	"身份证号码非法",
	"未满18周岁，无法注册");   
	
	var   area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"xingjiang",71:"台湾",81:"香港",82:"澳门",91:"国外"};     
	    
	var   idcard,Y,JYM;   
	var   S,M;   
	var   idcard_array   =   new   Array();   
	idcard_array   =   idcard.split(""); 
	
	if(area[parseInt(idcard.substr(0,2))]==null)   return   Errors[2];   
	switch(idcard.length){   
	case   15:   
		if((parseInt(idcard.substr(6,2))+1900)   %   4   ==   0   ||   ((parseInt(idcard.substr(6,2))+1900)   %   100   ==   0   &&   (parseInt(idcard.substr(6,2))+1900)   %   4   ==   0   )){   
			ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;
		}   else   {   
		ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;
		}   
		if(ereg.test(idcard))
			
			if(parseInt(nowYear)-(parseInt(idcard.substr(6,2))+1900)<18)
			return  Errors[3];  
		
			else
			return   Errors[0];   
		else   
			
		return   Errors[2];   
	break;   
	case   18:  
		if(parseInt(idcard.substr(6,4))   %   4   ==   0   ||   (parseInt(idcard.substr(6,4))   %   100   ==   0   &&   parseInt(idcard.substr(6,4))%4   ==   0   )){   
			ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
		}else
		{   
			ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; 
		}   
		if(ereg.test(idcard)){
			S=(parseInt(idcard_array[0])   +   parseInt(idcard_array[10]))   *   7   
			+   (parseInt(idcard_array[1])   +   parseInt(idcard_array[11]))   *   9   
			+   (parseInt(idcard_array[2])   +   parseInt(idcard_array[12]))   *   10   
			+   (parseInt(idcard_array[3])   +   parseInt(idcard_array[13]))   *   5   
			+   (parseInt(idcard_array[4])   +   parseInt(idcard_array[14]))   *   8   
			+   (parseInt(idcard_array[5])   +   parseInt(idcard_array[15]))   *   4   
			+   (parseInt(idcard_array[6])   +   parseInt(idcard_array[16]))   *   2   
			+   parseInt(idcard_array[7])   *   1     
			+   parseInt(idcard_array[8])   *   6   
			+   parseInt(idcard_array[9])   *   3   ;   
			Y = S%11;   
			M = "F";   
			JYM ="10X98765432";   
			M =JYM.substr(Y,1);
			
			if(M==idcard_array[17]){
				
				if(parseInt(nowYear)-parseInt(idcard.substr(6,4))<18)
					return  Errors[3]; 
				else
					return   Errors[0];
			}
			
			return   Errors[2];  
		}   
		else   return   Errors[2];   
		break;   
		default:   
		return   Errors[1];   
		break;   
	}   
}

/**
 * 验证手机号
 * @param obj
 * @return
 */
function checkMobilePhone(obj){
	
	//var partten = /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|15[0-9]\d{8}|189\d{8}$/;

	var partten=/^0?1(3|5|8)\d{9}$/;
	
	if(partten.test(obj)){
		return true ;
	}else{
		return false ;
	}
}