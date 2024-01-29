
function changeImg(){
    let img = document.getElementById("secondImg");
    let audio = document.getElementById('player');
    if (audio.paused) {
        audio.play();
        img.src = "./assests/imgs/pause.svg";
    }else{
        audio.pause();
        img.src = "./assests/imgs/play.svg";
    }
}