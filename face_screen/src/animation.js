const anime = require('animejs');

const VideoFace = document.getElementById('video-face');
const MovingText = document.getElementById("moving-text");
const FloorText = document.getElementById("moving-floor");

const AnimateOn = document.getElementById("animate-on");
const FloorOn = document.getElementById("floor-on");

let FloorLetter = document.querySelector('.letters-left');
let TextContent = document.querySelector('#text-contnent');
let EVMoving = document.querySelector('.text-wrapper .letters');
EVMoving.innerHTML = EVMoving.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let TextAnime = anime.timeline({loop: true})
  .add({
    targets: '.text-wrapper .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
    })
  .add({
    targets: '.container',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

let FloorAnime = anime.timeline({loop: true})
.add({
    targets: '.floor-contatiner .circle-container',
    scale: [0, 1],
    duration: 500,
    easing: "easeInOutExpo",
    offset: '-=1000'
  })
.add({
    targets: '.floor-contatiner .circle-dark',
    scale: [0, 1],
    duration: 200,
    easing: "easeOutExpo",
    offset: '-=600'
  })
.add({
    targets: '.floor-contatiner .letters-left',
    scale: [0, 1],
    duration: 300,
    offset: '-=550'
  })
.add({
    targets: '.floor-contatiner .bang',
    scale: [0, 1],
    // rotateZ: [45, 15],
    duration: 600,
    // offset: '-=1000'
  })
.add({
    targets: '.floor-contatiner',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1400
  });  

function MovingTextOn() {
  VideoFace.style.display = "none";
  MovingText.style.display = "block";
  TextAnime.restart();
}

function MovingTextOff() {
  VideoFace.style.display = "block";
  MovingText.style.display = "none";
}

function FloorTextOn() {
  VideoFace.style.display = "none";
  FloorText.style.display = "block";
  FloorAnime.restart();
}

function FloorTextOff() {
  // VideoFace.style.display = "block";
  FloorText.style.display = "none";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function EasterEgg(text) {
  FloorLetter.innerText = text;
  MovingTextOn();
  await sleep(2000);
  MovingTextOff();
}

async function GoingUp() {
  MovingTextOn();
  await sleep(12000);
  MovingTextOff();
}

async function ShowFloor(floor) {
  FloorLetter.innerText = floor
  FloorTextOn();
  await sleep(2000);
  FloorTextOff();
}

AnimateOn.addEventListener('click', async function(event){
  MovingTextOn();
  await sleep(5000);
  MovingTextOff();
});

FloorOn.addEventListener('click', async function(event){
  FloorTextOn();
  await sleep(3000);
  FloorTextOff();
})