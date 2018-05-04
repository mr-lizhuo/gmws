<!--横滚动-->
toleft("mleft1","mleft2","mleft3",50,"mleft")

function Mleft(id)
{
	return document.getElementById(id)
}
	
function toleft(mleft1,mleft2,mleft3,speedL,flagL)
{
	mleft1=Mleft(mleft1);
	mleft2=Mleft(mleft2);
	mleft3=Mleft(mleft3);
	mleft3.innerHTML=mleft2.innerHTML;

	function MarqueeL()
	{
		if(mleft3.offsetLeft-mleft1.scrollLeft<=0)
		{
			mleft1.scrollLeft-=mleft2.offsetWidth
		}
		else
		{
			mleft1.scrollLeft++
		}
	}
	
	flagL=setInterval(MarqueeL,speedL)
	
	mleft1.onmouseover=function ()
	{
		clearInterval(flagL);
	}
	mleft1.onmouseout=function ()
	{
		flagL=setInterval(MarqueeL,speedL);
	}
}