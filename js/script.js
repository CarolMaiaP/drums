document.body.addEventListener('keyup', (event)=>{
  // console.log(event.code);
  playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value;

  // console.log("musica", song);

  if(song !== ''){
    let songArray = song.split('');
    playComposition(songArray);
  }
});

function playSound(sound){
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if(audioElement){
    audioElement.play();
  }

  if(keyElement){
    audioElement.currentTime = 0;
    keyElement.classList.add('active');

    setTimeout(()=>{
      keyElement.classList.remove('active');
    }, 300);
  }
}

function playComposition(songArray){
  let wait = 0;

  for(let songItem of songArray){
    setTimeout(()=>{
      playSound(`key${songItem}`);
    }, wait);

    wait += 250;
  }
}