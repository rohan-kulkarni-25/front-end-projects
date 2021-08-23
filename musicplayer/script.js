const musicPlaylist = [
  {
    nameofsong: 'acoustic-guitars',
    urlofsong: 'assets/audio/acoustic-guitars-ambient-uplifting-background-music-for-videos-5642.mp3'
  },
  {
    nameofsong: 'chilled-acoustic',
    urlofsong: 'assets/audio/chilled-acoustic-indie-folk-instrumental-background-music-for-videos-5720.mp3'
  },
  {
    nameofsong: 'in-the-forest',
    urlofsong: 'assets/audio/in-the-forest-ambient-acoustic-guitar-instrumental-background-music-for-videos-5718.mp3'
  },
  {
    nameofsong: 'melody-of-nature',
    urlofsong: 'assets/audio/melody-of-nature-main-6672.mp3'
  }
]

let currentSongIndex = 0;
const audioEl = document.getElementById('audio--track');
const nameofsong = document.getElementById('name-of-song');
const addTrack = (currentSongIndex) => {
  audioEl.src = `${musicPlaylist[currentSongIndex].urlofsong}`;
  nameofsong.innerText = `${(musicPlaylist[currentSongIndex].nameofsong).toUpperCase()}`
}
addTrack(currentSongIndex);

const playAudio = () => {
  document.getElementById('audio--track')
  console.log('Played')
  document.getElementById('disc-img').style.animationPlayState = 'running'
}

const pauseAudio = () => {
  document.getElementById('audio--track')
  document.getElementById('disc-img').style.animationPlayState = 'paused'
}

const nextTrack = () => {
  currentSongIndex++;
  if (currentSongIndex < musicPlaylist.length) {
    addTrack(currentSongIndex)
    audioEl.play();
  }
  else {
    document.getElementById('message').classList.remove('hide')
    document.getElementById('message').classList.add('warn')
    setTimeout(() => {
      document.getElementById('message').classList.add('hide')
      document.getElementById('message').classList.remove('warn')
    }, 2000)
  }
}

const previousTrack = () => {
  currentSongIndex--;
  if (currentSongIndex >= 0) {
    addTrack(currentSongIndex)
    audioEl.play();
  }
  else {
    document.getElementById('message').classList.remove('hide')
    document.getElementById('message').classList.add('warn')
    setTimeout(() => {
      document.getElementById('message').classList.add('hide')
      document.getElementById('message').classList.remove('warn')
    }, 2000)
  }
}