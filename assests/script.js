
function changeImg(){
    let img = document.getElementById("secondImg");
    let audio = document.getElementById('player');
    let artistImg = document.querySelector(".song-img");
    if (audio.paused) {
        audio.play();
        img.src = "./assests/imgs/pause.svg";
        artistImg.classList.add("rotate");
    }else{
        audio.pause();
        img.src = "./assests/imgs/play.svg";
    }
}