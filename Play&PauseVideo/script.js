let player

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: 500,
    width: 900,
    videoId: "gP8yFWCTr7Q",
    playerVars: {
      playsinline: 1,
      autoplay: 0,
      controls: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady() {
  console.log(true);
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}

function pauseVideo() {
  player.pauseVideo();
}
function playVideo() {
  player.playVideo();
}