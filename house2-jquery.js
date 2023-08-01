$( document ).ready(function() {
    document.getElementById("bars").style.left="2px";
    $(".link2").slideToggle("300");
var bars_true=true;
$('.bars').click(function(){
document.getElementById("map").style.display="block";
if(bars_true) {
  document.getElementById("bars").setAttribute("class","fa-solid fa-xmark");
  document.getElementById("bars").style.left="3px";
  bars_true=false;
}
else {
  document.getElementById("bars").setAttribute("class","fa-solid fa-bars");
  document.getElementById("bars").style.left="2px";
  bars_true=true;
}
$(".link2").slideToggle("300");
})
document.getElementById("send").onclick=function() {
var val=document.getElementById("chat_input").value;
var div=document.createElement("div");
div.setAttribute("class","message my-message");
div.innerHTML=val;
document.getElementById("chat_messages").appendChild(div);
var element = document.getElementById("chat_box_body");
element.scrollTo(0,element.scrollHeight);
document.getElementById("chat_input").value="";
}

document.getElementById("chat_input").onkeydown=function(event) {
if(event.keyCode==13){
  window.setTimeout(function() {
    document.getElementById("send").click();
  },10);

}
}

document.getElementsByTagName("textarea")[0].onclick=function() {
this.focus();
}
var menu_check=false;
document.getElementById("message-delek").onclick=function() {
$("#message-delek").slideToggle("300");
$(".chat-box").slideToggle("300").end(document.getElementsByClassName("chat-box")[0].style.display="flex");
}
$("#exit").click(function() {
$(".chat-box").slideToggle("300").end(
  $("#message-delek").slideToggle("300")
);
})
$("#img1").click(function() {
$("#menu-1").slideToggle("300");
});
$("#p").click(function() {
if(menu_check==false) {
    document.getElementById("menu-down").setAttribute("class","fa-solid fa-circle-chevron-down");
    menu_check=true;
  }
  else {
    document.getElementById("menu-down").setAttribute("class","fa-solid fa-circle-chevron-left");
    menu_check=false;
  }
$("#menu-1").slideToggle("300");
});
$("#menu-down").click(function() {
  if(menu_check==false) {
    document.getElementById("menu-down").setAttribute("class","fa-solid fa-circle-chevron-down");
    menu_check=true;
  }
  else {
    document.getElementById("menu-down").setAttribute("class","fa-solid fa-circle-chevron-left");
    menu_check=false;
  }
$("#menu-1").slideToggle("300");
});


var expand_check=false;
$(".expand").click(function() {
if(expand_check==false) {
  document.documentElement.webkitRequestFullscreen();
  document.getElementById("expand").setAttribute("class","fa-solid fa-compress")
  expand_check=true;
}
else {
  document.exitFullscreen();
  document.getElementById("expand").setAttribute("class","fa-solid fa-expand")
  expand_check=false;
}
});

$(".location").click(function() {
if(screen.availWidth>480) {
  gsap.to("#google-map", { 
duration: 2, 
width: "40%", 
ease: "power2.out" 
});
}
else if(screen.availWidth<=480) {
gsap.to("#google-map", { 
duration: 2, 
height: "85%", 
ease: "power2.out" 
});
}
});

$(".map-exit").click(function() {
if(screen.availWidth>480) {
  gsap.to("#google-map", { 
duration: 2, 
width: "0%", 
ease: "power2.out" 
});
}
else if(screen.availWidth<=480) {
gsap.to("#google-map", { 
duration: 2, 
height: "0%", 
ease: "power2.out" 
});
}
});
var map_change_check=false;
$("#map-change").click(function() {
if(map_change_check==false) {
document.getElementById("map").style.display="none";
document.getElementById("map-2").style.display="block";
document.getElementById("map-change").innerHTML="3D map";
map_change_check=true;
}
else {
   document.getElementById("map-2").style.display="none";
 document.getElementById("map").style.display="block";
document.getElementById("map-change").innerHTML="normal map";
map_change_check=false;
}
});
$("#copy-i").click(function() {
navigator.clipboard.writeText("https://3d.emirkorkut.com");
document.getElementById("copy-i").setAttribute("class","fa-solid fa-check-double");
});
$(".share").click(function() {
  if(window.screen.availWidth<=558) {
document.getElementById("copy-page").style.display="block";
gsap.to("#copy-page", { 
duration: 2, 
bottom: "0%", 
ease: "power2.out"
});
  }
  else {
document.getElementById("copy-page").style.display="block";
gsap.to("#copy-page", { 
duration: 2, 
bottom: "3%",
ease: "power2.out" 
});
  }
});

$("#copy-exit").click(function() {
gsap.to("#copy-page", { 
duration: 2,
bottom: "-30%",
ease: "power2.out",
onComplete() {
   document.getElementById("copy-page").style.display="none";
  } 
});
});
});