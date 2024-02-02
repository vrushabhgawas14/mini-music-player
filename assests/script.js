
let playpauseImg = document.querySelector("#secondImg");
let artistImg = document.querySelector(".song-img");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let curr_track = document.getElementById('player');

let track_index = 0;
let isPlaying = false;

let englang = document.querySelector(".eng");
let marlang = document.querySelector(".mar");
let hinlang = document.querySelector(".hin");
let dropdown = document.querySelector(".drop-down");

function selectLang(){
    if (dropdown.style.visibility == 'visible') {
        dropdown.style.visibility = 'hidden';
    }else{
        dropdown.style.visibility = 'visible';
    }
}

englang.addEventListener('click',engFunc);
marlang.addEventListener('click',marFunc);
hinlang.addEventListener('click',hinFunc);

function engFunc(){
    localStorage.setItem("myData","English");
    document.location.reload();
}

function marFunc(){
    localStorage.setItem("myData","Marathi");
    document.location.reload();
}

function hinFunc(){
    localStorage.setItem("myData","Hindi");
    document.location.reload();
}

let currMusicList = [];

const englishList = [
    {
        "img": "./assests/imgs/English/harry.jpg",
        "name": "As It Was",
        "artist": "Harry Styles",
        "music": "./assests/audio/English/AsItWas.mp3"
    },
    {
        "img": "./assests/imgs/English/stephenSong.jpg",
        "name": "Until I found her",
        "artist": "Stephen Sanchez",
        "music": "./assests/audio/English/Until_i_FoundYou.mpeg"
    },
    {
        "img": "./assests/imgs/English/Fran1.jpg",
        "name": "Hypothetcials",
        "artist": "Fran Vasilić",
        "music": "./assests/audio/English/Hypotheticals.mp3"
    },{
        "img": "./assests/imgs/English/makeUmine1.jpg",
        "name": "Make You Mine",
        "artist": "PUBLIC",
        "music": "./assests/audio/English/MakeYouMine.mp3"
    },{
        "img": "./assests/imgs/English/jon.jpg",
        "name": "Roses are Red",
        "artist": "Jon Caryl",
        "music": "./assests/audio/English/RosesAreRed.m4a"
    }
]

const marathiList = [
    {
        img: './assests/imgs/Marathi/vrushabh-crop.jpg',
        name: 'Darling',
        artist: 'Vrushabh Gawas',
        music: './assests/audio/Marathi/InTheEnd.mp3'
    }
]

const hindiList = [
    {
        img: './assests/imgs/Hindi/mujheMK.jpg',
        name: 'Mujh Mein Kahin',
        artist: 'Ajay Atul',
        music: './assests/audio/Hindi/MujhMeinKahin.mp3'
    },
    {
        img: './assests/imgs/Hindi/DeMZ.jpg',
        name: 'De Mauka Zindagi',
        artist: 'Nilotpal Bora',
        music: './assests/audio/Hindi/DeMaukaZindagi.mp3'
    },
    {
        img: './assests/imgs/Hindi/Dangal.jpg',
        name: 'Gilehriyaan',
        artist: 'Pritam',
        music: './assests/audio/Hindi/Gilehriyaan.mp3'
    }
]

if (localStorage.getItem("myData") == "Marathi") {
    currMusicList = marathiList;
}else if(localStorage.getItem("myData") == "Hindi"){
    currMusicList = hindiList;
}else{
    currMusicList = englishList;
}

loadTrack(track_index);
function loadTrack(track_index){
    curr_track.src = currMusicList[track_index].music;
    curr_track.load();

    artistImg.src = currMusicList[track_index].img;
    track_name.textContent = currMusicList[track_index].name;
    track_artist.textContent = currMusicList[track_index].artist;

    curr_track.addEventListener('ended',nextTrack);
}

function nextTrack(){
    if(track_index < currMusicList.length -1){
        track_index += 1;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = currMusicList.length -1;
    }
    loadTrack(track_index);
    playTrack();
}


function playPauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack(){
    curr_track.play();
    isPlaying = true;
    artistImg.classList.add("rotate");
    playpauseImg.src = "./assests/imgs/svgs/pause.svg";
}

function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpauseImg.src = "./assests/imgs/svgs/play.svg";
}