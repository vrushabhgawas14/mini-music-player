
let playpauseImg = document.querySelector("#secondImg");
let artistImg = document.querySelector(".song-img");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let curr_track = document.getElementById('player');
let song_index = document.querySelector(".song-index");

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
        "music": "./assests/audio/English/Until_I_found_U.mp3"
    },
    {
        "img": "./assests/imgs/English/Fran1.jpg",
        "name": "Hypothetcials",
        "artist": "Fran Vasilić",
        "music": "./assests/audio/English/Hypotheticals.mp3"
    },{
        "img": "./assests/imgs/English/IWannaBe.jpg",
        "name": "I Wanna Be Yours",
        "artist": "Artic Monkeys",
        "music": "./assests/audio/English/IWannaBeYours.mp3"
    },{
        "img": "./assests/imgs/English/Conan.jpg",
        "name": "Heather",
        "artist": "Conan Gray",
        "music": "./assests/audio/English/Heather.mp3"
    },{
        "img": "./assests/imgs/English/jon.jpg",
        "name": "Roses are Red",
        "artist": "Jon Caryl",
        "music": "./assests/audio/English/RosesAreRed.m4a"
    },{
        "img": "./assests/imgs/English/makeUmine1.jpg",
        "name": "Make You Mine",
        "artist": "PUBLIC",
        "music": "./assests/audio/English/MakeYouMine.mp3"
    }
]

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
        name: 'Baharla Ha Madhumas',
        artist: 'Shreya Ghoshal',
        music: './assests/audio/Marathi/BaharlaHaMadhumas.mp3'
    },
    {
        img: './assests/imgs/Marathi/kaakan1.png',
        name: 'Kaakan',
        artist: 'Neha Rajpal & Shankar Mahadevan',
        music: './assests/audio/Marathi/Kaakan.mp3'
    },
    {
        img: './assests/imgs/Marathi/ManTalyat.jpg',
        name: 'Man Talyat',
        artist: 'Shailesh Ranade',
        music: './assests/audio/Marathi/ManTalyatMalyat.mp3'
    },
    {
        img: './assests/imgs/Marathi/ManUdhanVaryache.jpg',
        name: 'Man Udhan Varyache',
        artist: 'Ajay-Atul & Shankar Mahadevan',
        music: './assests/audio/Marathi/ManUdhanVaryache.mp3'
    }
]

const hindiList = [
    {
        img: './assests/imgs/Hindi/SawaarLoon.jpg',
        name: 'Sawaar Loon',
        artist: 'Monali Thakur',
        music: './assests/audio/Hindi/SawaarLoon.mp3'
    },
    {
        img: './assests/imgs/Hindi/TereHawale.jpg',
        name: 'Tere Hawaale',
        artist: 'Arijit Singh & Shilpa Rao',
        music: './assests/audio/Hindi/TereHawale.mp3'
    },
    {
        img: './assests/imgs/Hindi/SawaarLoon.jpg',
        name: 'Monta Re',
        artist: 'Amit Trivedi & Swanand Kirkire',
        music: './assests/audio/Hindi/MontaRe.mp3'
    },
    {
        img: './assests/imgs/Hindi/Kasoor.jpg',
        name: 'Kasoor',
        artist: 'Prateek Kuhad',
        music: './assests/audio/Hindi/Kasoor.mp3'
    },
    {
        img: './assests/imgs/Hindi/AlagAasmaan.jpg',
        name: 'Alag Aasmaan',
        artist: 'Anuv Jain',
        music: './assests/audio/Hindi/AlagAasmaan.mp3'
    },
    {
        img: './assests/imgs/Hindi/KaiseAbKahein.jpg',
        name: 'Kaise Ab Kahein',
        artist: 'Aasa Singh & Gaurav Chatterji',
        music: './assests/audio/Hindi/KaiseAbKahein.mp3'
    },
    {
        img: './assests/imgs/Hindi/Dangal.jpg',
        name: 'Gilehriyaan',
        artist: 'Jonita Gandhi',
        music: './assests/audio/Hindi/Gilehriyaan.mp3'
    },
    {
        img: './assests/imgs/Hindi/Gul.jpg',
        name: 'Gul',
        artist: 'Anuv Jain',
        music: './assests/audio/Hindi/Gul.mp3'
    },
    {
        img: './assests/imgs/Hindi/MohMohKeDhaage.jpg',
        name: 'Moh Moh Ke Dhaage',
        artist: 'Monali Thakur',
        music: './assests/audio/Hindi/MohMohKeDhaage.mp3'
    },
    {
        img: './assests/imgs/Hindi/RadhaKaiseNaJale.jpg',
        name: 'Radha Kaise Na Jale',
        artist: ' Asha Bhosle &  Udit Narayan',
        music: './assests/audio/Hindi/RadhaKaiseNaJale.mp3'
    }
]

let isEnglish = false;
let isHindi = false;
let isMarathi = false;

if (localStorage.getItem("myData") == "English") {
    currMusicList = englishList;
    isEnglish = true;
    isHindi = false;
    isMarathi = false;
}else if(localStorage.getItem("myData") == "Hindi"){
    currMusicList = hindiList;
    isHindi = true;
    isEnglish = false;
    isMarathi = false;
}else{
    currMusicList = marathiList;
    isMarathi = true;
    isEnglish = false;
    isHindi = false;
}

if(isEnglish && localStorage.getItem("myEnglish") != null)
{
    track_index = parseInt(localStorage.getItem("myEnglish"));
}
else if(isHindi && localStorage.getItem("myHindi") != null)
{
    track_index = parseInt(localStorage.getItem("myHindi"));
}
else if(isMarathi && localStorage.getItem("myMarathi") != null)
{
    track_index = parseInt(localStorage.getItem("myMarathi"));
}

loadTrack(track_index);
function loadTrack(track_index){
    curr_track.src = currMusicList[track_index].music;
    curr_track.load();

    song_index.textContent = (track_index + 1) + "/" + currMusicList.length;
    artistImg.src = currMusicList[track_index].img;
    track_name.textContent = currMusicList[track_index].name;
    track_artist.textContent = currMusicList[track_index].artist;

    if(track_name.innerHTML.length > 16){
        track_name.style.fontSize = "1.2rem";
    }else{
        track_name.style.fontSize = "1.5rem";
    }

    if(isEnglish)
    {
        localStorage.setItem("myEnglish",track_index);
    }
    else if(isHindi)
    {
        localStorage.setItem("myHindi",track_index);
    }
    else
    {
        localStorage.setItem("myMarathi",track_index);
    }

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
