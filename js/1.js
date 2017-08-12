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
