function mySlide(slideBoxStr, slideImgsStr, slideBarStr,prevStr,nextStr, speed){
	var slideBox = $(slideBoxStr);	//轮换图根容器
	var slideImgs = $(slideImgsStr);	//大图容器
	slideImgs.children("li:not(:first-child)").hide();
	var slideImgsLi = slideImgs.children("li");	//大图组合
	var length = slideImgsLi.length;
	var interStatu = 0;
	var currId = lastId = 0;
	if(length <= 1){
		return;
	}
	init();
	var slideBar = $(slideBarStr);	//序号按钮容器
	var slideprev = $(prevStr);
	var slidenext = $(nextStr);
	var slideBarLi = slideBar.children("li"); //序号按钮组合
	function init(){
		var str = "<ul class='" + slideBarStr.substring(1,slideBarStr.length) + "'><li class='on'>1</li>";
		for(var i = 2; i <= length;i++){
			str += "<li>" + i + "</li>";
		}
		str += "</ul>";
		slideBox.append(str)
	}
	function startAuto(){
		interStatu = setInterval(function(){
			currId = currId+1 >= length ? currId + 1 - length : currId + 1;
			change()
		},speed)
	}
	function clearAuto(){
		clearInterval(interStatu)
	}
	function change(){
		slideImgsLi.eq(lastId).hide();
		slideImgsLi.eq(currId).show();
		slideBarLi.eq(lastId).removeClass("on");
		slideBarLi.eq(currId).addClass("on");
		lastId = currId
	}
	function binding(){		
		slideBarLi.bind({
			"mouseover":function(){
				currId = $(this).index();
				change()
			}
		});
		slideprev.bind({
			"click":function(){
				currId = currId-1 <= -1 ? length-1 : currId - 1;
				change()
			}
		});
		slidenext.bind({
			"click":function(){
				currId = currId+1 >= length ? currId + 1 - length : currId + 1;
				change()
			}
		});
		slideBox.bind({
			"mouseover":function(){	clearAuto() },
			"mouseout":function(){ startAuto() }
		});
	}
	binding();
	startAuto();
}