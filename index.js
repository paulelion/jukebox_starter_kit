var audio = document.querySelector("audio")

var songs = [
  {
    title: "I'll Be Good",
    artist: "Sectec",
    src: "https://archive.org/download/Ill_Be_Good_EP-12234/Setec_-_01_-_Ill_Be_Good.mp3"
  },
  {
    title: "Floss Suffers From Gamma Radiation",
    artist: "Blue Ducks", 
    src: "https://archive.org/download/Six-10661/Blue_Ducks_-_01_-_Floss_Suffers_From_Gamma_Radiation.mp3"
  },
  {
    title: "Wonderland",
    artist: "Combo",
    src: "https://archive.org/download/Wonderland-16519/Combo_-_01_-_wonderland.mp3"
  }
]

class Jukebox {
  constructor(index) {
    this.songs = songs[index].src
    
  }

  static selectSong(index){
    
    var title = document.getElementById("title")
    var artist = document.getElementById("artist")
    
    title.innerHTML = songs[index].title
    artist.innerHTML = songs[index].artist

    var jb = new Jukebox(index)
    audio.src = jb.songs
    
}

static playSong(){
    audio.play();
  }
  
 static pauseSong(){
    audio.pause();
  }
  
  stopSong(){
    audio.pause();
    audio.currentTime = 0;
  }
}


document.getElementById("play").addEventListener("click", function(){
  Jukebox.playSong()
});

document.getElementById("pause").addEventListener("click", function(){
  jukebox.pauseSong()
});

document.getElementById("next").addEventListener("click", function(){
  jukebox.stopSong()
});


  