//Variables
var audio = document.querySelector("#audio");
var audioSource = document.querySelector("#audioSource");

//Function for changing the audio
function changeAudio(e){
    console.log(e.target);
  var audioSelected = document.getElementById(e.srcElement.id).getAttribute("audio");
  console.log(audioSelected);
  audioSource.src = audioSelected;
  audio.load();
}

//
function playAudio(){
    audio.play();
}
function pauseAudio() {
    audio.pause();
}
function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}
function forwardAudio(){
    audio.currentTime+=10;
    audio.play();
}
function rewindAudio(){
    audio.currentTime-=10;
    audio.play();
}

document.getElementById("avTalk190").addEventListener("click", changeAudio, false);
document.getElementById("avTalk189").addEventListener("click", changeAudio, false);
document.getElementById("avTalk188").addEventListener("click", changeAudio, false);
document.getElementById("avTalk187").addEventListener("click", changeAudio, false);
document.getElementById("avTalk186").addEventListener("click", changeAudio, false);
document.getElementById("avTalk185").addEventListener("click", changeAudio, false);
document.getElementById("avTalk184").addEventListener("click", changeAudio, false);
document.getElementById("avTalk183").addEventListener("click", changeAudio, false);
document.getElementById("avTalk182").addEventListener("click", changeAudio, false);
document.getElementById("avTalk181").addEventListener("click", changeAudio, false);