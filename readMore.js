var dots=document.getElementById("dots");
var more=document.getElementById("more");
var btn1=document.getElementById("btn1")
function readMore()
{
if(dots.style.display==="none") 
{
dots.style.display="inline";
btn1.innerHTML="Read more";
more.style.display="none";
}
else{
dots.style.display="none";
btn1.innerHTML="Read less";
more.style.display="inline";
}
}