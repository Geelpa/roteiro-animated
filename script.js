function play() {
    var audio = document.getElementById("audio");
    audio.play();

    var volumeOff = document.getElementById("volumeOff")
    var volumeOn = document.getElementById("volumeOn")

    volumeOff.style.display = "none";
    volumeOn.style.display = "block";
}