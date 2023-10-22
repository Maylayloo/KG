start = document.getElementById('starter');

start.addEventListener('click', function() {
    let audio = document.getElementById('myAudio');
    audio.playbackRate = 2.0;
    audio.play();
        window.open('step2.html', '_blank');


});
