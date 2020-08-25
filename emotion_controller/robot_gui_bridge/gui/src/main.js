const BlinkBtn = document.getElementById('blink');
const BootUpBtn = document.getElementById('boot_up');
const DeadBtn = document.getElementById('dead');
const Delivered1Btn = document.getElementById('delivered_1');
const Delivered2Btn = document.getElementById('delivered_2');
const EatBoxBtn = document.getElementById('eat_box');
const ElevatorBtn = document.getElementById('elevator');
const LookingLeftBtn = document.getElementById('looking_left');
const MovingBtn = document.getElementById('moving');
const NormalBtn = document.getElementById('normal');
const SadBtn = document.getElementById('sad');
const SadMoreBtn = document.getElementById('sad_more');
const SleepBtn = document.getElementById('sleep');
const SurprisedBtn = document.getElementById('surprised');

const GoingUpBtn = document.getElementById("going_up");
const FourBtn = document.getElementById("four");
const FiveBtn = document.getElementById("five");
const SixBtn = document.getElementById("six");
const EasterEggBtn = document.getElementById("easter_egg");

txt_listener.subscribe(function(m) {
    document.getElementById("msg").innerHTML = m.data;
});

function changeEmotion(emotion) {
    const emotion_msg = new ROSLIB.Message({
        data: emotion,
    });
    emotion_pub.publish(emotion_msg);
}

BlinkBtn.addEventListener('click', function(event){
    changeEmotion('blink');
});
BootUpBtn.addEventListener('click', function(event){
    changeEmotion('boot_up');
});
DeadBtn.addEventListener('click', function(event){
    changeEmotion('dead');
});
Delivered1Btn.addEventListener('click', function(event){
    changeEmotion('delivered_1');
});
Delivered2Btn.addEventListener('click', function(event){
    changeEmotion('delivered_2');
});
EatBoxBtn.addEventListener('click', function(event){
    changeEmotion('eat_box');
});
ElevatorBtn.addEventListener('click', function(event){
    changeEmotion('elevator');
});
LookingLeftBtn.addEventListener('click', function(event){
    changeEmotion('looking_left');
});
MovingBtn.addEventListener('click', function(event){
    changeEmotion('moving');
});
NormalBtn.addEventListener('click', function(event){
    changeEmotion('normal');
});
SadBtn.addEventListener('click', function(event){
    changeEmotion('sad');
});
SadMoreBtn.addEventListener('click', function(event){
    changeEmotion('sad_more');
});
SleepBtn.addEventListener('click', function(event){
    changeEmotion('sleep');
});
SurprisedBtn.addEventListener('click', function(event){
    changeEmotion('surprised');
});
GoingUpBtn.addEventListener('click', function(event){
    changeEmotion('going_up');
});
FourBtn.addEventListener('click', function(event){
    changeEmotion('four');
});
FiveBtn.addEventListener('click', function(event){
    changeEmotion('five');
});
SixBtn.addEventListener('click', function(event){
    changeEmotion('six');
});
EasterEggBtn.addEventListener('click', function(event){
    changeEmotion('fuck_you');
});