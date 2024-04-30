function playVideo(videoSource) {
    var video = document.getElementById('video');
    video.src = videoSource;
    video.load();
    video.play();
}
