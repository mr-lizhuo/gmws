<!--竖滚动-->
totop("mtop1","mtop2","mtop3",70,"mtop")

function Mtop(id)
{
	return document.getElementById(id)
}
	
function totop(mtop1,mtop2,mtop3,speedT,flagT)
{
	mtop1=Mtop(mtop1);
	mtop2=Mtop(mtop2);
	mtop3=Mtop(mtop3);
	mtop3.innerHTML=mtop2.innerHTML;

	function MarqueeT()
	{
		if(mtop3.offsetTop-mtop1.scrollTop<=0)
		{
			mtop1.scrollTop-=mtop2.offsetHeight
		}
		else
		{
			mtop1.scrollTop++
		}
	}
	
	flagT=setInterval(MarqueeT,speedT)
	
	mtop1.onmouseover=function ()
	{
		clearInterval(flagT);
	}
	mtop1.onmouseout=function ()
	{
		flagT=setInterval(MarqueeT,speedT);
	}
}