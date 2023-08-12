import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import {
CSS3DRenderer,
CSS3DObject
} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/renderers/CSS3DRenderer.js';

window.onload=function() {


    var image2='360/jpeg-optimizer_vecteezy_360-panorama-view-of-a-black-minimalist-interior-of-a-modern-home-in-3d-rendering_2081472.jpg';
var image1="360/jpeg-optimizer_vecteezy_360-panorama-view-of-a-black-minimalist-interior-of-a-modern-home-in-3d-rendering_2081474.jpg";
var image3="360/jpeg-optimizer_vecteezy_spherical-360-seamless-panorama-projection-of-an-interior-modern-design-room-in.jpg";
var image4="360/jpeg-optimizer_lavabo.jpg";



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
camera.position.set(10, 10, 10);
camera.target = new THREE.Vector3( 0, 0, 0 );
var renderer = new THREE.WebGLRenderer({
antialias: false,
precision: "lowp",
alpha:false,
stencil:false,
powerPreference:"low-power",
depth:false,
preserveDrawingBuffer: true  

});

renderer.useLegacyLights = false;
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType( 'local' );
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(1);
document.getElementsByClassName("out-box")[0].appendChild(renderer.domElement);

var labelRenderer = new CSS3DRenderer();
//labelRenderer.setPixelRatio(0.5);
labelRenderer.setSize(innerWidth, innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
document.getElementsByClassName("out-box")[0].appendChild(labelRenderer.domElement);





document.getElementsByClassName("cardboard")[0].onclick=function() {
	 /* document.exitFullscreen();
	window.setTimeout(function() {
	const sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking', 'layers' ] };
					navigator.xr.requestSession( 'immersive-vr', sessionInit ).then(async function(session) {
						await renderer.xr.setSession( session );
					});

		},1000);*/
        window.location.href="aframe-vr2.html";
}

renderer.xr.addEventListener('sessionend', () => {
  window.location.reload();
});

document.getElementsByClassName("camera")[0].onclick=function() {

var canvas_download=document.createElement("a");
canvas_download.href=renderer.domElement.toDataURL("image/jpeg");
canvas_download.download="house-1.jpeg";
canvas_download.click();
}

var isUserInteracting = false,
onMouseDownMouseX = 0, onMouseDownMouseY = 0,
lon = 0, onMouseDownLon = 0,
lat = 0, onMouseDownLat = 0,
phi = 0, theta = 0;

var onclickPointerX,onclickPointerY,onclickLon,onclickLat;


var sayac1=0;
var mesh1,mesh2,mesh3,mesh4;
var target1,target2;
var fov1=0;
var check_fov=false;

var audio_check=false;

document.onclick=function() {
  if(audio_check==false) {
    audio_1.play();
    audio_check=true;
  }
}

if(screen.availWidth >=992) {

document.addEventListener( 'pointerdown', onDocumentMouseDown, false );
document.addEventListener( 'pointermove', onDocumentMouseMove, false );
document.addEventListener( 'pointerup', onDocumentMouseUp, false );
document.addEventListener( 'wheel', onDocumentMouseWheel, false );

}
else {

document.addEventListener( 'touchstart', onDocumentMouseDown2, false );
document.addEventListener( 'touchmove', onDocumentMouseMove2, false );
document.addEventListener( 'touchend', onDocumentMouseUp2, false );
document.addEventListener( 'wheel', onDocumentMouseWheel2, false );
}

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(20, 20, 30);
scene.add(light);

var light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(-7.5, 3.9, -27);
scene.add(light2);
scene.add(new THREE.AmbientLight(0xffffff, 1));


var box = new THREE.Mesh(new THREE.BoxBufferGeometry(0, 0, 0), new THREE.MeshLambertMaterial({
color: 0x0088ff,
wireframe: false
}));
scene.add(box);




var sayac=0;



load4(image3);


function load4(image3) {
        document.getElementsByClassName("container")[0].style.display="flex";
  var geometry = new THREE.SphereGeometry( 500, 60, 40 );
geometry.scale( - 1, 1, 1 );

var material = new THREE.MeshBasicMaterial( {
    map: new THREE.TextureLoader().load( image3, function (texture) {
    console.log('Texture loaded successfully:'+ texture);
      document.getElementsByClassName("container")[0].style.display="none";
    new THREE.TextureLoader().load( image1);
new THREE.TextureLoader().load( image2);
new THREE.TextureLoader().load( image4);
  },
  function (xhr) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log('Texture loading progress:'+ percentComplete + '%');
  },
  function (error) {
    console.error('Error loading texture:'+ error);
  } )
} );

mesh3= new THREE.Mesh( geometry, material );
mesh3.material.transparent = true;
target1=mesh3;


scene.add(mesh3);



}

var audio_1=new Audio();
audio_1.src="Zimmer.mp3";


audio_1.onended=function() {
  this.currentTime = 0;
  audio_1.play();
}

async function came_fov() {
 await new Promise(function(resolve) {
   target1.material.opacity=1;


var fov_anim_2=window.setInterval(function() {
  target1.material.opacity-=0.1;
 if(target1.material.opacity<=0) {
    clearInterval(fov_anim_2);
    check_fov=true;
	
    resolve();
  }
},30);

 }); 
}

var pos = new THREE.Vector3(-6.3, 9.3, -6.3);
var normal = new THREE.Vector3(1, 0, 0);

var cNormal = new THREE.Vector3();
var cPos = new THREE.Vector3();
var m4 = new THREE.Matrix4();

var div = document.createElement('video');
div.className = 'label';
//div.textContent = '1';
div.src="360/karasu.mp4";
div.setAttribute("loop",true);
div.muted=true;
div.onloadeddata=function() {
div.play();
}
var label = new CSS3DObject(div);
label.position.copy(pos);
label.rotation.y = Math.PI * 0;
label.scale.set(0.025, 0.025, 1);
box.add(label);

var pos_web = new THREE.Vector3(23.2, 12.0, 3);
var div_web2 = document.createElement('video');
div_web2.className = 'label2';
//div_web.src="https://mbunalyapi.com";
div_web2.src="360/karasu.mp4";
div_web2.setAttribute("loop",true);
div_web2.muted=true;
div_web2.onloadeddata=function() {
div_web2.play()
}
var label = new CSS3DObject(div_web2);
label.position.copy(pos_web);
label.rotation.y = Math.PI * 1.5;
label.scale.set(0.025, 0.025, 1);
box.add(label);

var pos2 = new THREE.Vector3(9.1, 11.0, 20.5);

var div2=document.createElement("div");
div2.className="anno";
var text1=document.createElement("p");
text1.innerHTML="4";
div2.appendChild(text1);
var label2 = new CSS3DObject(div2);
label2.position.copy(pos2);
label2.rotation.y = Math.PI * 0.5;
label2.scale.set(0.025, 0.025, 1);
box.add(label2);

var div_anno_a=document.createElement("a");
div_anno_a.className="btn btn-1 btn-white";
var div_anno_i=document.createElement("i");
div_anno_i.className="fa-solid fa-chevron-down fa-shake";
div_anno_a.appendChild(div_anno_i);
var label2_a = new CSS3DObject(div_anno_a);
label2_a.position.copy(pos2);
label2_a.rotation.y = Math.PI * 0;
label2_a.scale.set(0.025, 0.025, 1);
box.add(label2_a);

var pos3 = new THREE.Vector3(-19.7, 5.7, -20);

var div3=document.createElement("div");
div3.className="gate";

var label3 = new CSS3DObject(div3);
label3.position.copy(pos3);
label3.rotation.y = Math.PI * 1.1;
label3.scale.set(0.025, 0.025, 1);
box.add(label3);

var pos3_2 = new THREE.Vector3(15, 4.7, -23);

var div3_2=document.createElement("div");
div3_2.className="gate6";

var label3 = new CSS3DObject(div3_2);
label3.position.copy(pos3_2);
label3.rotation.y = Math.PI * 0.615;
label3.scale.set(0.025, 0.025, 1);
box.add(label3);

div3_2.onpointerenter=function() {
this.style.background="rgba( 255, 255, 255, .4 )";
this.style.border="1px solid white";
}

div3_2.onpointerleave=function() {
this.style.background="transparent";
this.style.border="none";
}



var pos3_3 = new THREE.Vector3(3.8, 7.3, -55.1);

var div3_3=document.createElement("div");
div3_3.className="gate7";

var label3 = new CSS3DObject(div3_3);
label3.position.copy(pos3_3);
label3.rotation.y = Math.PI * 1;
label3.scale.set(0.025, 0.025, 1);
box.add(label3);

div3_3.onpointerenter=function() {
this.style.background="rgba( 255, 255, 255, .4 )";
this.style.border="3px solid white";
}

div3_3.onpointerleave=function() {
this.style.background="transparent";
this.style.border="none";
}



var pos_anno_6 = new THREE.Vector3(-5, 2.3, -5.0);

var div_anno_a_5=document.createElement("a");
div_anno_a_5.className="btn btn-5 btn-white";
var div_anno_i_5=document.createElement("i");
div_anno_i_5.className="fa-solid fa-chevron-down fa-shake";
div_anno_a_5.appendChild(div_anno_i_5);
var label2_a_5 = new CSS3DObject(div_anno_a_5);
label2_a_5.position.copy(pos_anno_6);
label2_a_5.rotation.x = Math.PI * 0.5;
label2_a_5.scale.set(0.025, 0.025, 1);
box.add(label2_a_5);

var div_anno_6=document.createElement("div");
div_anno_6.className="anno7";
var text_anno_6=document.createElement("p");
text_anno_6.innerHTML="7";
div_anno_6.appendChild(text_anno_6);
var label2 = new CSS3DObject(div_anno_6);
label2.position.copy(pos_anno_6);
label2.rotation.y = Math.PI * 0;
label2.scale.set(0.025, 0.025, 1);
box.add(label2);

div_anno_6.onpointerenter=function() {
this.style.border="3px solid red";
}
div_anno_6.onpointerleave=function() {
this.style.border="3px solid white";
}

var pos_anno = new THREE.Vector3(-15.7, 9.7, -15);

var div_anno_a_6=document.createElement("a");
div_anno_a_6.className="btn btn-6 btn-white";
var div_anno_i_6=document.createElement("i");
div_anno_i_6.className="fa-solid fa-door-open fa-shake";
div_anno_a_6.appendChild(div_anno_i_6);
var label2_a_6 = new CSS3DObject(div_anno_a_6);
label2_a_6.position.copy(pos_anno);
label2_a_6.rotation.y = Math.PI * 0;
label2_a_6.scale.set(0.025, 0.025, 1);
box.add(label2_a_6);

var div_anno_1=document.createElement("div");
div_anno_1.className="anno2";
var text_anno_1=document.createElement("p");
text_anno_1.innerHTML="3";
div_anno_1.appendChild(text_anno_1);
var label2 = new CSS3DObject(div_anno_1);
label2.position.copy(pos_anno);
label2.rotation.y = Math.PI * 0;
label2.scale.set(0.025, 0.025, 1);
box.add(label2);

div_anno_1.onpointerenter=function() {
this.style.border="3px solid red";
}
div_anno_1.onpointerleave=function() {
this.style.border="3px solid white";
}

var pos_anno_2 = new THREE.Vector3(3.8, 15.3, -13.1);


var div_anno_a_1=document.createElement("a");
div_anno_a_1.className="btn btn-1-1 btn-white";
var div_anno_i_1=document.createElement("i");
div_anno_i_1.className="fa-solid fa-chevron-down fa-shake";
div_anno_a_1.appendChild(div_anno_i_1);
var label2_a_1 = new CSS3DObject(div_anno_a_1);
label2_a_1.position.copy(pos_anno_2);
label2_a_1.rotation.y = Math.PI * 1;
label2_a_1.scale.set(0.025, 0.025, 1);
box.add(label2_a_1);

var div_anno_2=document.createElement("div");
div_anno_2.className="anno3";
var text_anno_2=document.createElement("p");
text_anno_2.innerHTML="1";
div_anno_2.appendChild(text_anno_2);
var label2 = new CSS3DObject(div_anno_2);
label2.position.copy(pos_anno_2);
label2.rotation.y = Math.PI * 0.5;
label2.scale.set(0.025, 0.025, 1);
box.add(label2);

div_anno_2.onpointerenter=function() {
this.style.border="3px solid red";
}
div_anno_2.onpointerleave=function() {
this.style.border="3px solid white";
}

var pos_anno_3 = new THREE.Vector3(48.0, 9.8, 8.9);

var div_anno_a_2=document.createElement("a");
div_anno_a_2.className="btn-2 btn-white";
var div_anno_i_2=document.createElement("i");
div_anno_i_2.className="fa-solid fa-chevron-down fa-shake";
div_anno_a_2.appendChild(div_anno_i_2);
var label2_a_2 = new CSS3DObject(div_anno_a_2);
label2_a_2.position.copy(pos_anno_3);
label2_a_2.rotation.y = Math.PI * 0.5;
label2_a_2.scale.set(0.025, 0.025, 1);
box.add(label2_a_2);

var div_anno_3=document.createElement("div");
div_anno_3.className="anno4";
var text_anno_3=document.createElement("p");
text_anno_3.innerHTML="2";
div_anno_3.appendChild(text_anno_3);
var label2 = new CSS3DObject(div_anno_3);
label2.position.copy(pos_anno_3);
label2.rotation.y = Math.PI * 0.9;
label2.scale.set(0.025, 0.025, 1);
box.add(label2);

div_anno_3.onpointerenter=function() {
this.style.border="3px solid red";
}
div_anno_3.onpointerleave=function() {
this.style.border="3px solid white";
}

var pos_anno_4 = new THREE.Vector3(39, 19.7, 22.2);

var div_anno_a_3=document.createElement("a");
div_anno_a_3.className="btn btn-3 btn-white";
var div_anno_i_3=document.createElement("i");
div_anno_i_3.className="fa-solid fa-chevron-down fa-shake";
div_anno_a_3.appendChild(div_anno_i_3);
var label2_a_3 = new CSS3DObject(div_anno_a_3);
label2_a_3.position.copy(pos_anno_4);
label2_a_3.rotation.y = Math.PI * 1.5;
label2_a_3.scale.set(0.025, 0.025, 1);
box.add(label2_a_3);

var div_anno_4=document.createElement("div");
div_anno_4.className="anno5";
var text_anno_4=document.createElement("p");
text_anno_4.innerHTML="5";
div_anno_4.appendChild(text_anno_4);
var label2 = new CSS3DObject(div_anno_4);
label2.position.copy(pos_anno_4);
label2.rotation.y = Math.PI * 1.5;
label2.scale.set(0.025, 0.025, 1);
box.add(label2);

div_anno_4.onpointerenter=function() {
this.style.border="3px solid red";
}
div_anno_4.onpointerleave=function() {
this.style.border="3px solid white";
}

var pos_anno_5 = new THREE.Vector3(-14, 3.7, 21.2);

var div_anno_a_4=document.createElement("a");
div_anno_a_4.className="btn btn-4 btn-white";
var div_anno_i_4=document.createElement("i");
div_anno_i_4.className="fa-solid fa-chevron-down fa-shake";
div_anno_a_4.appendChild(div_anno_i_4);
var label2_a_4 = new CSS3DObject(div_anno_a_4);
label2_a_4.position.copy(pos_anno_5);
label2_a_4.rotation.x = Math.PI * 0.5;
label2_a_4.scale.set(0.025, 0.025, 1);
box.add(label2_a_4);

var div_anno_5=document.createElement("div");
div_anno_5.className="anno6";
var text_anno_5=document.createElement("p");
text_anno_5.innerHTML="6";
div_anno_5.appendChild(text_anno_5);
var label2 = new CSS3DObject(div_anno_5);
label2.position.copy(pos_anno_5);
label2.rotation.y = Math.PI * 0;
label2.scale.set(0.025, 0.025, 1);
box.add(label2);

div_anno_5.onpointerenter=function() {
this.style.border="3px solid red";
}
div_anno_5.onpointerleave=function() {
this.style.border="3px solid white";
}

div3.onpointerenter=function() {
this.style.background="rgba( 255, 255, 255, .4 )";
this.style.border="1px solid white";
}

div3.onpointerleave=function() {
this.style.background="transparent";
this.style.border="none";
}

div_anno_i_6.onclick=async function() {
      document.getElementsByClassName("container")[0].style.display="flex";
document.getElementsByClassName("label")[0].style.height="0px";
document.getElementsByClassName("btn-1")[0].style.visibility="visible";
document.getElementsByClassName("btn-3")[0].style.visibility="hidden";
document.getElementsByClassName("btn-4")[0].style.visibility="visible";
document.getElementsByClassName("btn-5")[0].style.visibility="hidden";
document.getElementsByClassName("btn-1-1")[0].style.visibility="visible";
document.getElementsByClassName("btn-2")[0].style.visibility="visible";
document.getElementsByClassName("btn-6")[0].style.visibility="hidden";
document.getElementsByClassName("gate")[0].style.visibility="hidden";
document.getElementsByClassName("gate6")[0].style.visibility="hidden";
document.getElementsByClassName("gate7")[0].style.visibility="hidden";
document.getElementsByClassName("gate3")[0].style.visibility="visible";
document.getElementsByClassName("outdoor")[0].style.visibility="visible";
document.getElementsByClassName("outdoor_2")[0].style.visibility="visible";
document.getElementsByClassName("outdoor_3")[0].style.visibility="hidden";
target1=mesh3;
await came_fov();
target1.material.opacity=1.0;
mesh3.material.map=new THREE.TextureLoader().load( image3, function (texture) {
    console.log('Texture loaded successfully:'+ texture);
      document.getElementsByClassName("container")[0].style.display="none";

  },
  function (xhr) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log('Texture loading progress:'+ percentComplete + '%');
  },
  function (error) {
    console.error('Error loading texture:'+ error);
  } );


camera.fov=60;
camera.updateProjectionMatrix();

}

var pos3_1 = new THREE.Vector3(9.1, 5.0, 21);

var div5=document.createElement("div");
div5.className="gate3";

var label5 = new CSS3DObject(div5);
label5.position.copy(pos3_1);
label5.rotation.y = Math.PI * 0.01;
label5.scale.set(0.025, 0.025, 1);
box.add(label5);

div5.onpointerenter=function() {
this.style.background="rgba( 255, 255, 255, .4 )";
this.style.border="3px solid white";

}

div5.onpointerleave=function() {
this.style.background="transparent";
this.style.border="none";
}

div_anno_i.onclick=async function() {
      document.getElementsByClassName("container")[0].style.display="flex";
document.getElementsByClassName("label")[0].style.height="260px";
document.getElementsByClassName("btn-1")[0].style.visibility="hidden";
document.getElementsByClassName("btn-1-1")[0].style.visibility="visible";
document.getElementsByClassName("btn-4")[0].style.visibility="hidden";
document.getElementsByClassName("btn-5")[0].style.visibility="hidden";
document.getElementsByClassName("btn-3")[0].style.visibility="hidden";
document.getElementsByClassName("btn-2")[0].style.visibility="visible";
document.getElementsByClassName("btn-6")[0].style.visibility="hidden";
document.getElementsByClassName("gate")[0].style.visibility="hidden";
document.getElementsByClassName("gate3")[0].style.visibility="hidden";
document.getElementsByClassName("gate6")[0].style.visibility="hidden";
document.getElementsByClassName("gate7")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor")[0].style.visibility="visible";
document.getElementsByClassName("outdoor_2")[0].style.visibility="visible";
document.getElementsByClassName("outdoor_3")[0].style.visibility="hidden";
target1=mesh3;
await came_fov();
target1.material.opacity=1.0;
mesh3.material.map=new THREE.TextureLoader().load( image3,  function (texture) {
    console.log('Texture loaded successfully:'+ texture);
      document.getElementsByClassName("container")[0].style.display="none";

  },
  function (xhr) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log('Texture loading progress:'+ percentComplete + '%');
  },
  function (error) {
    console.error('Error loading texture:'+ error);
  } );

camera.fov=60;
camera.updateProjectionMatrix();
}

var check=false;

var div_animation=window.setInterval(function() {
if(check==false) {
div2.style.height="30px";
div2.style.width="30px";
text1.style.fontSize="20px";
check=true;
}
else if(check==true) {
div2.style.height="40px";
div2.style.width="40px";
text1.style.fontSize="30px";
check=false;
}

},1000);

var div_animation_2=window.setInterval(function() {
if(check==false) {
div_anno_1.style.height="40px";
div_anno_1.style.width="40px";
text_anno_1.style.fontSize="30px";
check=true;
}
else if(check==true) {
div_anno_1.style.height="50px";
div_anno_1.style.width="50px";
text_anno_1.style.fontSize="35px";
check=false;
}

},1000);

var div_animation_3=window.setInterval(function() {
if(check==false) {
div_anno_2.style.height="40px";
div_anno_2.style.width="40px";
text_anno_2.style.fontSize="30px";
check=true;
}
else if(check==true) {
div_anno_2.style.height="50px";
div_anno_2.style.width="50px";
text_anno_2.style.fontSize="35px";
check=false;
}

},1000);


var div_animation_4=window.setInterval(function() {
if(check==false) {
div_anno_3.style.height="60px";
div_anno_3.style.width="60px";
text_anno_3.style.fontSize="40px";
check=true;
}
else if(check==true) {
div_anno_3.style.height="70px";
div_anno_3.style.width="70px";
text_anno_3.style.fontSize="45px";
check=false;
}

},1000);

var div_animation_5=window.setInterval(function() {
if(check==false) {
div_anno_4.style.height="40px";
div_anno_4.style.width="40px";
text_anno_4.style.fontSize="30px";
check=true;
}
else if(check==true) {
div_anno_4.style.height="50px";
div_anno_4.style.width="50px";
text_anno_4.style.fontSize="35px";
check=false;
}

},1000);

var div_animation_6=window.setInterval(function() {
if(check==false) {
div_anno_5.style.height="40px";
div_anno_5.style.width="40px";
text_anno_5.style.fontSize="30px";
check=true;
}
else if(check==true) {
div_anno_5.style.height="50px";
div_anno_5.style.width="50px";
text_anno_5.style.fontSize="35px";
check=false;
}

},1000);

var div_animation_7=window.setInterval(function() {
if(check==false) {
div_anno_6.style.height="40px";
div_anno_6.style.width="40px";
text_anno_6.style.fontSize="30px";
check=true;
}
else if(check==true) {
div_anno_6.style.height="50px";
div_anno_6.style.width="50px";
text_anno_6.style.fontSize="35px";
check=false;
}

},1000);

div2.onpointerenter=function() {
this.style.border="3px solid red";
}
div2.onpointerleave=function() {
this.style.border="3px solid white";
}

var pos4 = new THREE.Vector3(0, 35, -40);

var div4=document.createElement("div");
div4.className="gate2";

var label4 = new CSS3DObject(div4);
label4.position.copy(pos4);
label4.rotation.y = Math.PI * 1;
label4.scale.set(0.025, 0.025, 1);
box.add(label4);

div4.onpointerenter=function() {
this.style.background="rgba( 255, 255, 255, .4 )";
this.style.border="1px solid white";
}

div4.onpointerleave=function() {
this.style.background="transparent";
this.style.border="none";
}

var pos_outdoor = new THREE.Vector3(3.8, 7.3, -15.1);

var div_outdoor=document.createElement("div");
div_outdoor.className="outdoor";

var label_outdoor = new CSS3DObject(div_outdoor);
label_outdoor.position.copy(pos_outdoor );
label_outdoor.rotation.y = Math.PI * 1;
label_outdoor.scale.set(0.025, 0.025, 1);
box.add(label_outdoor );

div_outdoor.onpointerenter=function() {
this.style.background="rgba( 255, 255, 255, .4 )";
this.style.border="3px solid white";
}

div_outdoor.onpointerleave=function() {
this.style.background="transparent";
this.style.border="none";
}
div_anno_i_1.onclick=async function() { 
      document.getElementsByClassName("container")[0].style.display="flex";
document.getElementsByClassName("label")[0].style.height="0px";
document.getElementsByClassName("label2")[0].style.height="260px";
document.getElementsByClassName("btn-1")[0].style.visibility="hidden";
document.getElementsByClassName("btn-2")[0].style.visibility="hidden";
document.getElementsByClassName("btn-4")[0].style.visibility="visible";
document.getElementsByClassName("btn-5")[0].style.visibility="hidden";
document.getElementsByClassName("btn-1-1")[0].style.visibility="hidden";
document.getElementsByClassName("btn-3")[0].style.visibility="visible";
document.getElementsByClassName("btn-6")[0].style.visibility="hidden";
document.getElementsByClassName("gate")[0].style.visibility="hidden";
document.getElementsByClassName("gate3")[0].style.visibility="hidden";
document.getElementsByClassName("gate6")[0].style.visibility="hidden";
document.getElementsByClassName("gate7")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor_2")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor_3")[0].style.visibility="visible";
target1=mesh3;
await came_fov();
target1.material.opacity=1.0;
mesh3.material.map=new THREE.TextureLoader().load( image1,  function (texture) {
    console.log('Texture loaded successfully:'+ texture);
      document.getElementsByClassName("container")[0].style.display="none";
  
  },
  function (xhr) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log('Texture loading progress:'+ percentComplete + '%');
  },
  function (error) {
    console.error('Error loading texture:'+ error);
  } );


camera.fov=60;
camera.updateProjectionMatrix();

}

var pos_outdoor_2 = new THREE.Vector3(53.0, 6.8, 8.9);

var div_outdoor_2=document.createElement("div");
div_outdoor_2.className="outdoor_2";

var label_outdoor_2 = new CSS3DObject(div_outdoor_2);
label_outdoor_2.position.copy(pos_outdoor_2 );
label_outdoor_2.rotation.y = Math.PI * 0.5;
label_outdoor_2.scale.set(0.025, 0.025, 1);
box.add(label_outdoor_2 );

div_outdoor_2.onpointerenter=function() {
this.style.background="rgba( 255, 255, 255, .4 )";
this.style.border="3px solid white";
}

div_outdoor_2.onpointerleave=function() {
this.style.background="transparent";
this.style.border="none";
}
div_anno_i_2.onclick=async function() { 
      document.getElementsByClassName("container")[0].style.display="flex";
document.getElementsByClassName("label")[0].style.height="0px";
document.getElementsByClassName("label2")[0].style.height="0px";
document.getElementsByClassName("btn-1")[0].style.visibility="visible";
document.getElementsByClassName("btn-2")[0].style.visibility="hidden";
document.getElementsByClassName("btn-4")[0].style.visibility="hidden";
document.getElementsByClassName("btn-5")[0].style.visibility="hidden";
document.getElementsByClassName("btn-1-1")[0].style.visibility="hidden";
document.getElementsByClassName("btn-3")[0].style.visibility="hidden";
document.getElementsByClassName("btn-6")[0].style.visibility="hidden";
document.getElementsByClassName("gate")[0].style.visibility="hidden";
document.getElementsByClassName("gate3")[0].style.visibility="visible";
document.getElementsByClassName("gate6")[0].style.visibility="hidden";
document.getElementsByClassName("gate7")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor_2")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor_3")[0].style.visibility="hidden";
target1=mesh3;
await came_fov();
target1.material.opacity=1.0;
mesh3.material.map=new THREE.TextureLoader().load( image4,  function (texture) {
    console.log('Texture loaded successfully:'+ texture);
      document.getElementsByClassName("container")[0].style.display="none";
    
  },
  function (xhr) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log('Texture loading progress:'+ percentComplete + '%');
  },
  function (error) {
    console.error('Error loading texture:'+ error);
  } );

camera.fov=60;
camera.updateProjectionMatrix();

}

var pos_outdoor_3 = new THREE.Vector3(43, 12.7, 24.2);

var div_outdoor_3=document.createElement("div");
div_outdoor_3.className="outdoor_3";

var label_outdoor_3 = new CSS3DObject(div_outdoor_3);
label_outdoor_3.position.copy(pos_outdoor_3 );
label_outdoor_3.rotation.y = Math.PI * 0.5;
label_outdoor_3.scale.set(0.025, 0.025, 1);
box.add(label_outdoor_3 );

div_outdoor_3.onpointerenter=function() {
this.style.background="rgba( 255, 255, 255, .4 )";
this.style.border="3px solid white";
}

div_outdoor_3.onpointerleave=function() {
this.style.background="transparent";
this.style.border="none";
}

div_anno_i_3.onclick=async function() {
      document.getElementsByClassName("container")[0].style.display="flex";

document.getElementsByClassName("label")[0].style.height="260px";
document.getElementsByClassName("label2")[0].style.height="0px";
document.getElementsByClassName("btn-1")[0].style.visibility="hidden";
document.getElementsByClassName("btn-2")[0].style.visibility="visible";
document.getElementsByClassName("btn-4")[0].style.visibility="hidden";
document.getElementsByClassName("btn-3")[0].style.visibility="hidden";
document.getElementsByClassName("btn-1-1")[0].style.visibility="visible";
document.getElementsByClassName("btn-5")[0].style.visibility="hidden";
document.getElementsByClassName("btn-6")[0].style.visibility="hidden";
document.getElementsByClassName("gate")[0].style.visibility="hidden";
document.getElementsByClassName("gate3")[0].style.visibility="hidden";
document.getElementsByClassName("gate6")[0].style.visibility="hidden";
document.getElementsByClassName("gate7")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor")[0].style.visibility="visible";
document.getElementsByClassName("outdoor_2")[0].style.visibility="visible";
document.getElementsByClassName("outdoor_3")[0].style.visibility="hidden";
target1=mesh3;
await came_fov();
target1.material.opacity=1.0;
mesh3.material.map=new THREE.TextureLoader().load( image3,  function (texture) {
    console.log('Texture loaded successfully:'+ texture);
      document.getElementsByClassName("container")[0].style.display="none";

  },
  function (xhr) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log('Texture loading progress:'+ percentComplete + '%');
  },
  function (error) {
    console.error('Error loading texture:'+ error);
  } );

camera.fov=60;
camera.updateProjectionMatrix();

}

div_anno_i_4.onclick=async function() {
      document.getElementsByClassName("container")[0].style.display="flex";

document.getElementsByClassName("label")[0].style.height="0px";
document.getElementsByClassName("label2")[0].style.height="0px";
document.getElementsByClassName("btn-1")[0].style.visibility="hidden";
document.getElementsByClassName("btn-2")[0].style.visibility="hidden";
document.getElementsByClassName("btn-4")[0].style.visibility="hidden";
document.getElementsByClassName("btn-3")[0].style.visibility="hidden";
document.getElementsByClassName("btn-1-1")[0].style.visibility="hidden";
document.getElementsByClassName("btn-5")[0].style.visibility="visible";
document.getElementsByClassName("btn-6")[0].style.visibility="hidden";
document.getElementsByClassName("gate")[0].style.visibility="hidden";
document.getElementsByClassName("gate6")[0].style.visibility="hidden";
document.getElementsByClassName("gate7")[0].style.visibility="hidden";
document.getElementsByClassName("gate3")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor_2")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor_3")[0].style.visibility="hidden";
target1=mesh3;
await came_fov();
target1.material.opacity=1.0;
mesh3.material.map=new THREE.TextureLoader().load( image2,  function (texture) {
    console.log('Texture loaded successfully:'+ texture);
      document.getElementsByClassName("container")[0].style.display="none";

  },
  function (xhr) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log('Texture loading progress:'+ percentComplete + '%');
  },
  function (error) {
    console.error('Error loading texture:'+ error);
  } );

camera.fov=60;
camera.updateProjectionMatrix();

}

div_anno_i_5.onclick=async function() {
      document.getElementsByClassName("container")[0].style.display="flex";
document.getElementsByClassName("label")[0].style.height="0px";
document.getElementsByClassName("label2")[0].style.height="280px";
document.getElementsByClassName("btn-1")[0].style.visibility="hidden";
document.getElementsByClassName("btn-2")[0].style.visibility="hidden";
document.getElementsByClassName("btn-5")[0].style.visibility="hidden";
document.getElementsByClassName("btn-3")[0].style.visibility="visible";
document.getElementsByClassName("btn-1-1")[0].style.visibility="hidden";
document.getElementsByClassName("btn-4")[0].style.visibility="visible";
document.getElementsByClassName("btn-6")[0].style.visibility="hidden";
document.getElementsByClassName("gate")[0].style.visibility="hidden";
document.getElementsByClassName("gate6")[0].style.visibility="hidden";
document.getElementsByClassName("gate7")[0].style.visibility="hidden";
document.getElementsByClassName("gate3")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor_2")[0].style.visibility="hidden";
document.getElementsByClassName("outdoor_3")[0].style.visibility="visible";
target1=mesh3;
await came_fov();
target1.material.opacity=1.0;
mesh3.material.map=new THREE.TextureLoader().load( image1,  function (texture) {
    console.log('Texture loaded successfully:'+ texture);
      document.getElementsByClassName("container")[0].style.display="none";

  },
  function (xhr) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log('Texture loading progress:'+ percentComplete + '%');
  },
  function (error) {
    console.error('Error loading texture:'+ error);
  } );

camera.updateProjectionMatrix();

}
window.addEventListener('resize', onWindowResize, false);


animate();




function onWindowResize() {

camera.aspect = window.innerWidth / window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth, window.innerHeight);

labelRenderer.setSize(window.innerWidth, window.innerHeight);

}

var google_map_check=false;
document.getElementById("google-map").onpointerdown=function() {
 google_map_check=true;
}
document.getElementById("google-map").onpointerleave=function() {
 google_map_check=false;
}

document.getElementById("chat-box").onpointerdown=function() {
 google_map_check=true;
}
document.getElementById("chat-box").onpointerleave=function() {
 google_map_check=false;
}

function onDocumentMouseDown( event ) {

  if(google_map_check==false) {

event.preventDefault();

isUserInteracting = true;

onclickPointerX = event.clientX;
onclickPointerY = event.clientY;

onclickLon = lon;
onclickLat = lat;
  }
}

function onDocumentMouseMove( event ) {

if ( isUserInteracting === true ) {

lon = ( onclickPointerX - event.clientX ) * 0.1 + onclickLon;
lat = ( event.clientY - onclickPointerY ) * 0.1 + onclickLat;

}

}

function onDocumentMouseUp( event ) {
isUserInteracting=false;


}

function onDocumentMouseWheel( event ) {

if(camera.fov<=60 && camera.fov>=16.25) {
camera.fov += event.deltaY * 0.015;
camera.updateProjectionMatrix();

}
else {
camera.fov=60;

}
}

/*########################################*/
let initialDistance = 0;
let currentDistance = 0;
let lastScaleRatio = 1; 

function onDocumentMouseDown2( event ) {

   if(google_map_check==false) {

    if (event.touches.length === 2) {
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    initialDistance = calculateDistance(touch1.clientX, touch1.clientY, touch2.clientX, touch2.clientY);
  }

isUserInteracting = true;

onclickPointerX = event.touches[0].clientX;
onclickPointerY = event.touches[0].clientY;

onclickLon = lon;
onclickLat = lat;
   }
}

function onDocumentMouseMove2( event ) {

if ( isUserInteracting === true ) {

	  if (event.touches.length === 2) {
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    currentDistance = calculateDistance(touch1.clientX, touch1.clientY, touch2.clientX, touch2.clientY);
    const scaleRatio = currentDistance / initialDistance;

    if (scaleRatio > lastScaleRatio) {
    if(camera.fov<=60 && camera.fov>=16.25) {
camera.fov += -166 * 0.02;
camera.updateProjectionMatrix();
    }
else {
camera.fov=60;

}
    } else if (scaleRatio < lastScaleRatio) {
	    if(camera.fov<=60 && camera.fov>=16.25) {
camera.fov += 166 * 0.02;
camera.updateProjectionMatrix();

}
else {
camera.fov=60;

}
    }

    lastScaleRatio = scaleRatio;
  }

lon = ( onclickPointerX - event.touches[0].clientX ) * 0.1 + onclickLon;
lat = ( event.touches[0].clientY - onclickPointerY ) * 0.1 + onclickLat;

}

}

	function calculateDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

function onDocumentMouseUp2( event ) {

isUserInteracting = false;
}

function onDocumentMouseWheel2( event ) {

if(camera.fov<=60 && camera.fov>=16.25) {
camera.fov += event.deltaY * 0.02;
camera.updateProjectionMatrix();

}
else {
camera.fov=60;

}
}
var rotate_check=false;

document.getElementsByClassName("rotate")[0].onclick=function() {
  if(rotate_check==false) {
    document.getElementById("img-rotate").setAttribute("src","tap.png");
    rotate_check=true;
  }
  else {
    document.getElementById("img-rotate").setAttribute("src","rotation.png");
    rotate_check=false;
  }
}

var voice_check=false;

document.getElementsByClassName("voice")[0].onclick=function() {
  if(voice_check==false) {
    document.getElementById("img-rotate-2").setAttribute("src","no-music-sign.png");
    audio_1.pause();
    voice_check=true;
  }
  else {
    document.getElementById("img-rotate-2").setAttribute("src","musical-note.png");
    audio_1.play();
    voice_check=false;
  }
}

var alpha,beta,gamma;
var compassHeading = null;
function handleOrientation(event) {
    if (event.alpha) {
    compassHeading = Math.abs(360 + event.alpha);
  } else {
    compassHeading = null;
  }

  


}

window.addEventListener('deviceorientation', handleOrientation,false);
function render() {

				renderer.render( scene, camera );

			} 

function animate() {
requestAnimationFrame(animate);
//update();
renderer.setAnimationLoop( render );


	
if(window.screen.availWidth>=996) {
 if(rotate_check==false) {
    lon += 0.05;
  }
}

 else if(window.screen.availWidth<996) {
  if(rotate_check==false) {
    lon += 0.05;
  }
  
}


 
    
     lat = Math.max( - 85, Math.min( 85, lat ) );
phi = THREE.Math.degToRad( 90 - lat );
theta = THREE.Math.degToRad( lon );

camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
camera.target.y = 500 * Math.cos( phi );
camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );

camera.lookAt( camera.target );

				if (compassHeading !== null) {
  if(rotate_check==true) {

   camera.rotation.y = ((-compassHeading * Math.PI) / 180) - Math.PI / 2 ; 
  }
}


renderer.render(scene, camera);
labelRenderer.render(scene, camera);

}

}