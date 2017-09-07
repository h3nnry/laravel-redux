function fullscreen(element) {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msRequestFullscreen) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msCancelFullScreen) {
            document.msCancelFullScreen();
        }
    }
}

function fullscreenChangeAddListener(handler) {
    document.addEventListener('webkitfullscreenchange', handler, false);
    document.addEventListener('mozfullscreenchange', handler, false);
    document.addEventListener('fullscreenchange', handler, false);
    document.addEventListener('MSFullscreenChange', handler, false);
}

function fullscreenChangeRemoveListener(handler) {
    document.addEventListener('webkitfullscreenchange', handler);
    document.addEventListener('mozfullscreenchange', handler);
    document.addEventListener('fullscreenchange', handler);
    document.addEventListener('MSFullscreenChange', handler);
}

export { fullscreen, fullscreenChangeAddListener, fullscreenChangeRemoveListener }