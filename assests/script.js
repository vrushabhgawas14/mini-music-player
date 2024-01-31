
function changeImg(){
    let img = document.getElementById("secondImg");
    let audio = document.getElementById('player');
    let artistImg = document.querySelector(".song-img");
    if (audio.paused) {
        audio.load();
        audio.play();
        img.src = "./assests/imgs/svgs/pause.svg";
        artistImg.classList.add("rotate");
    }else{
        audio.pause();
        img.src = "./assests/imgs/svgs/play.svg";
    }
}

let audio = document.getElementById('player');
let artistImg = document.querySelector(".artistImg");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let prev_track = document.querySelector(".prev-track");
let next_track = document.querySelector(".next-track");
let play_pause_track =document.querySelector(".curr-track");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = true;
let updateTimer;

const musicList = [
    {
        img: './assests/imgs/stephenSong.jpg',
        name: 'Until I found her',
        artist: 'Stephen Sanchez',
        music: './assests/audio/Until_i_FoundYou.mpeg'
    },
    {
        img: './assests/imgs/harry.jpg',
        name: 'As It Was',
        artist: 'Harry Styles',
        music: './assests/audio/AsItWas.mp3'
    },
    {
        img: './assests/imgs/Fran.jpg',
        name: 'Hypothetcials',
        artist: 'Fran Vasilić',
        music: './assests/audio/Hypotheticals.mp3'
    },{
        img: './assests/imgs/makeUmine.jpg',
        name: 'Make You Mine',
        artist: 'PUBLIC',
        music: './assests/audio/MakeYouMine.mp3'
    },{
        img: './assests/imgs/jon.jpg',
        name: 'Roses are Red',
        artist: 'Jon Caryl',
        music: './assests/audio/RosesAreRed.m4a'
    }
]