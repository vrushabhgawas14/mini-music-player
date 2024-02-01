
let playpauseImg = document.querySelector("#secondImg");
let artistImg = document.querySelector(".song-img");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let curr_track = document.getElementById('player');

let track_index = 0;
let isPlaying = false;

const musicList = [
    {
        img: './assests/imgs/harry.jpg',
        name: 'As It Was',
        artist: 'Harry Styles',
        music: './assests/audio/AsItWas.mp3'
    },
    {
        img: './assests/imgs/stephenSong.jpg',
        name: 'Until I found her',
        artist: 'Stephen Sanchez',
        music: './assests/audio/Until_i_FoundYou.mpeg'
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

loadTrack(track_index);
function loadTrack(track_index){
    curr_track.src = musicList[track_index].music;
    curr_track.load();

    artistImg.src = musicList[track_index].img;
    track_name.textContent = musicList[track_index].name;
    track_artist.textContent = musicList[track_index].artist;

    curr_track.addEventListener('ended',nextTrack);
}

function nextTrack(){
    if(track_index < musicList.length -1){
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
        track_index = musicList.length -1;
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