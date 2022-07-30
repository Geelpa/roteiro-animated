function play() {
    var audio = document.getElementById("audio");

    if (audio.currentTime == 0) {
        setTimeout(() => {
            audio.play();
        }, 2000)
    }
    audio.currentTime = 0
    audio.pause();


    var element = document.querySelector(".fas")
    element.classList.toggle("fa-volume-mute")
    element.classList.toggle("fa-volume-up")

}