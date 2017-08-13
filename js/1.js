function login(c)
{
	var log1=document.getElementById("login");
	var log2=document.getElementById("cont1");
	if (c==0) 
	{
		log1.style.display="block";
		log1.style.zIndex="40";
		log2.style.zIndex="40";
		
	}
	else 
	{
		log1.style.display="none";
		log1.style.zIndex="0";
		log2.style.zIndex="0";
	}
	
}
var count=0;
function change()
{
	var chng=document.getElementById("mynav");
	
	if(count%2==0)
	{
	chng.style.backgroundColor="rgba(0,0,0,0.6)";
	chng.style.color="white";
	}
	else
	{
		chng.style.backgroundColor="rgba(0,0,0,0)";
	chng.style.color="white";
	}
	count++;
}

