let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let songs = [
    { songName: "Salam-E-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/2.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/3.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/4.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/5.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/6.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/7.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/8.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/9.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/10.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-E-Ishq", filePath: "song/11.mp3", coverPath: "covers/1.jpg" },
]

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

    }
})
audioElement.addEventListener('timeupdate', () => {

    progres = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgress.value = progres;
})
myProgress.addEventListener('change', () => {
    audioElement.currentTime = myProgress.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 0;
    }
    else {
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

function changeclass(e){
    // console.log(e);
    var col=decument.getElementsByClassName(e.target.songItem);
    for(let item of col){
        item.style.backgroundColor='blue';
    }
}

