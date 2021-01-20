var starSpeed = 0.01; // Change the star speed from here.
var starImg = new THREE.TextureLoader().load('Photos/star.png'); // Change star photo.

let scene, camera, renderer, stars, starGeo;

function init(sprite) {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  starGeo = new THREE.Geometry();
  for (let i = 0; i < 6000; i++) {
    star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    star.velocity = 0;
    star.acceleration = starSpeed;
    starGeo.vertices.push(star);
  }

  let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 1,
    map: sprite
  });

  stars = new THREE.Points(starGeo, starMaterial);
  scene.add(stars);

  window.addEventListener("resize", onWindowResize, false);

  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  starGeo.vertices.forEach(p => {
    p.velocity += p.acceleration
    p.y -= p.velocity;

    if (p.y < -200) {
      p.y = 200;
      p.velocity = 0;
    }
  });
  
  starGeo.verticesNeedUpdate = true;
  stars.rotation.y += 0.002;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init(starImg);

/* JavaScript to close the Info boxes when you click outise them */

var mercuryModel = document.getElementById('mercuryInfo');
var venusModel = document.getElementById('venusInfo');
var earthModel = document.getElementById('earthInfo');
var marsModel = document.getElementById('marsInfo');
var jupiterModel = document.getElementById('jupiterInfo');
var saturnModel = document.getElementById('saturnInfo');
var uranusModel = document.getElementById('uranusInfo');
var neptuneModel = document.getElementById('neptuneInfo');

window.onclick = function (event) {
  if (event.target == mercuryModel) {
    mercuryModel.style.display = "none";
  }
  if (event.target == venusModel) {
    venusModel.style.display = "none";
  }
  if (event.target == earthModel) {
    earthModel.style.display = "none";
  }
  if (event.target == marsModel) {
    marsModel.style.display = "none";
  }
  if (event.target == jupiterModel) {
    jupiterModel.style.display = "none";
  }
  if (event.target == saturnModel) {
    saturnModel.style.display = "none";
  }
  if (event.target == uranusModel) {
    uranusModel.style.display = "none";
  }
  if (event.target == neptuneModel) {
    neptuneModel.style.display = "none";
  }
}

/* Photo hover change text */

$(document).ready(function ($) {
  $("#img-1").hover(
    function () { $(".text-1").addClass('active') },
    function () { $(".text-1").removeClass('active') }
  )
  $("#img-2").hover(
    function () { $(".text-2").addClass('active') },
    function () { $(".text-2").removeClass('active') }
  )
  $("#img-3").hover(
    function () { $(".text-3").addClass('active') },
    function () { $(".text-3").removeClass('active') }
  )
  $("#img-4").hover(
    function () { $(".text-4").addClass('active') },
    function () { $(".text-4").removeClass('active') }
  )
  $("#img-5").hover(
    function () { $(".text-5").addClass('active') },
    function () { $(".text-5").removeClass('active') }
  )
  $("#img-6").hover(
    function () { $(".text-6").addClass('active') },
    function () { $(".text-6").removeClass('active') }
  )
  $("#img-7").hover(
    function () { $(".text-7").addClass('active') },
    function () { $(".text-7").removeClass('active') }
  )
  $("#img-8").hover(
    function () { $(".text-8").addClass('active') },
    function () { $(".text-8").removeClass('active') }
  )
});