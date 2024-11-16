var text="";
var i=0;
while (i<20){
    text +="<br> The number is:"+ i;
    i++;
}
document.getElementById("number").innerHTML=text;