window.addEventListener('keydown',function(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);

    if (!audio) return;
    audio.currentTime = 0; //rewinds to start
    audio.play();

    key.classList.toggle('playing');

    // console.log(key);
});

function removeTransition(e) {

    if (e.propertyName !==  'transform') return;
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition))