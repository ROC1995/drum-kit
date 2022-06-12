var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (i=0; i<numberofDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var audio = new audio("sound/tom-1.mp3");
    audio.play();n/  n 70
  });


}
