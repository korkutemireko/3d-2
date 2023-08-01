import * as THREE from "three";
import { ThreeJSOverlayView } from "@googlemaps/three";
import { GLTFLoader } from "GLTFLoader";
let map;
const mapOptions = {
tilt: 0,
heading: 0,
zoom: 18,
center: { lat:36.90001723802048, lng:30.646029710769653},
mapId: "15431d2b469f209e",
disableDefaultUI: true,
gestureHandling: "none",
keyboardShortcuts: false,

};

function initMap() {
const mapDiv = document.getElementById("map");

map = new google.maps.Map(mapDiv, mapOptions);

 var directionsService = new google.maps.DirectionsService,
directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
});



const scene = new THREE.Scene();
const ambientLight2 = new THREE.AmbientLight(0xffffff, 0.75);

scene.add(ambientLight2);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.25);

directionalLight2.position.set(0, 10, 50);
scene.add(directionalLight2);



const loader = new GLTFLoader();
const url =
  "https://raw.githubusercontent.com/googlemaps/js-samples/main/assets/pin.gltf";


loader.load(url, (gltf) => {
  gltf.scene.scale.set(7, 7, 7);
  gltf.scene.rotation.x = Math.PI / 1;
  scene.add(gltf.scene);

  let { tilt, heading, zoom } = mapOptions;

  const animate2 = () => {
    if (tilt < 67.5) {
      tilt += 0.5;
    } else if (heading <= 360) {
      heading += 0.2;
      zoom -= 0.0002;
    }
    else if (heading >= 360) {
      heading += 0.2;
    }
     else {
      return;
    }


    map.moveCamera({ tilt, heading, zoom });
requestAnimationFrame(animate2);

};


  requestAnimationFrame(animate2);
});
new ThreeJSOverlayView({
  map,
  scene,
  anchor: {   lat: 36.90001723802048, lng: 30.646029710769653, altitude: 50 },
  THREE,
});
}

window.initMap = initMap;