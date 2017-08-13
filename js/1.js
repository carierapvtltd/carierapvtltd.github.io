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
		log2.style.zIndex="-100";
	}
	
}
var count=0;
function change()
{
	var chng1=document.getElementById("mynav");
	var chng2=document.getElementById("mynav2");
	if(count%2==0)
	{
	chng1.style.backgroundColor="rgba(0,0,0,0.6)";
	chng2.style.backgroundColor="rgba(0,0,0,0.6)";
	chng1.style.color="white";
	}
	else
	{
		chng1.style.backgroundColor="rgba(0,0,0,0)";
		chng2.style.backgroundColor="rgba(0,0,0,0)";
	chng1.style.color="white";
	}
	count++;
}
