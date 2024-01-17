document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('fullscreen-video');

    // Function to toggle full screen
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            videoContainer.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    // Event listener for clicking on the video to toggle full screen
    video.addEventListener('click', toggleFullScreen);

    // Event listener for pressing the space key to toggle full screen
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space') {
            e.preventDefault(); // Prevent scrolling down the page
            toggleFullScreen();
        }
    });
});
