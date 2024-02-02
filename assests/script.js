
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
        "music": "./assests/audio/English/Until_i_Found_U.mp3"
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
// I wanna be yours, Heather, Lover

const marathiList = [
    {
        img: './assests/imgs/Marathi/ganpati.jpg',
        name: 'Ekadantaya',
        artist: 'Suprabha KV',
        music: './assests/audio/Marathi/Ekadantaya.mp3'
    },
    {
        img: './assests/imgs/Marathi/marathi.jpg',
        name: 'Bolato Marathi',
        artist: 'Various Artists',
        music: './assests/audio/Marathi/BolotoMarathi.mp3'
    },
    {
        img: './assests/imgs/Marathi/madhumas.jpg',
        name: 'Baharla Madhumas',
        artist: 'Shreya Ghoshal',
        music: './assests/audio/Marathi/BaharlaHaMadhumas.mp3'
    }
]
//kakan,baharla,radha hi bawari,Man talyat,chandra aahe sakshila,boloto marathi,
//ganpati bappa
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
        artist: 'Jonita Gandhi',
        music: './assests/audio/Hindi/Gilehriyaan.mp3'
    }
]
// moh moh ke dhage, sawaar loon, kasoor, Monta re, alag Aasmaan, Kaise abb kahen,
// tere hawaale, Gul, Gilehriyaan, Radha kaise na Jale

if (localStorage.getItem("myData") == "English") {
    currMusicList = englishList;
}else if(localStorage.getItem("myData") == "Hindi"){
    currMusicList = hindiList;
}else{
    currMusicList = marathiList;
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