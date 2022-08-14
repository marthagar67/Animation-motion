function red_font(){
    document.getElementById("td_text").style.color="red";
}
function green_font(){
    document.getElementById("td_text").style.color="green";
}
function blue_font(){
    document.getElementById("td_text").style.color="blue";
}

function changeBg(){
    let c=document.getElementById("colorsel").value;

    if(c=="nothing"){
    document.getElementById("td_text").style.backgroundColor="";}

    if(c=="red"){
    document.getElementById("td_text").style.backgroundColor="red";}
    
    if(c=="green"){
    document.getElementById("td_text").style.backgroundColor="green";}
    
    if(c=="blue"){
    document.getElementById("td_text").style.backgroundColor="blue";}
}