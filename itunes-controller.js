function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList) {
    var template = ""
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      template += `  
       <div class="row">
        <div class="col-sm-5 flex">
         <div class="img">
             <img src="${song.albumArt}"
                 alt="" class="img-responsive">
         </div>
       </div>
       <div class="col-sm-7 info">
         <ul>
             <li>
                 <h3>${song.title}</h3>

             </li>
             <li>
                 <h3>${song.artist}</h3>

             </li>
             <li>
                 <h4>${song.collection}</h4>

             </li>
             <li>
                 <p>$${song.price}</p>

             </li>
             <li>
                 <audio controls class="audio">
                     <source src="${song.preview}"
                         type="audio/ogg">
                     <source src="${song.preview}"
                         type="audio/mpeg">
                 </audio>
             </li>
         </ul>
        </div>
       </div>`
    }
    document.getElementById("songs").innerHTML = template
  }

  document.addEventListener('play', function (e) {
    var audios = document.getElementsByClassName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);
}
