const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');

const songs = [
  {
    title: "Chill Beat",
    artist: "Pixabay Artist",
    src: "music/song1.mp3",
    cover: "images/cover1.jpg"
  },
  {
    title: "Motivation",
    artist: "Pixabay",
    src: "music/song2.mp3",
    cover: "images/cover2.jpg"
  },
  {
    title: "Sentimental",
    artist: "Pixabay free music",
    src: "music/song3.mp3",
    cover: "images/cover3.jpg"
  },
  {
    title: "Ambient Piano",
    artist: "LesFM",
    src: "music/song4.mp3",
    cover: "images/cover4.jpg"
  },
  {
    title: "Uplifting Cinematic",
    artist: "Dream-Protocol",
    src: "music/song5.mp3",
    cover: "images/cover5.jpg"
  },
  {
    title: "Happy Vibes",
    artist: "AudioCoffee",
    src: "music/song6.mp3",
    cover: "images/cover6.jpg"
  },
  {
    title: "Soft Acoustic",
    artist: "RoyaltyFreeMusic",
    src: "music/song7.mp3",
    cover: "images/cover7.jpg"
  },
  {
    title: "Emotional Piono",
    artist: "Alex-Productions",
    src: "music/song8.mp3",
    cover: "images/cover8.jpg"
  }
];

let songIndex = 0;

function loadSong(song) {
  title.innerText = song.title;
  artist.innerText = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
  downloadBtn.href = song.src;
}

loadSong(songs[songIndex]);

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = '⏸';
  } else {
    audio.pause();
    playBtn.innerText = '▶';
  }
});

prevBtn.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.innerText = '⏸';
});

nextBtn.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.innerText = '⏸';
});

audio.addEventListener('timeupdate', () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener('input', () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});

volume.addEventListener('input', () => {
  audio.volume = volume.value;
});

// Optional: Autoplay next song
audio.addEventListener('ended', () => {
  nextBtn.click();
});

const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optional: Change button icon/text
  if (document.body.classList.contains('dark-mode')) {
    modeToggle.textContent = '☀ Light Mode';
  } else {
    modeToggle.textContent = '🌙 Dark Mode';
  }
});
