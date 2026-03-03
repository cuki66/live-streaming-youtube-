<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Live Streaming</title>
  <style>
    body {
      background: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    video {
      width: 90%;
      max-width: 900px;
      border-radius: 10px;
      background: black;
    }
  </style>
</head>
<body>

  <video id="player" controls autoplay></video>

  <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
  <script>
    const video = document.getElementById('player');
    const streamURL = "STREAM_URL_KAMU.m3u8"; // ganti dengan URL streaming kamu

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamURL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // untuk iPhone/iPad/ Safari
      video.src = streamURL;
      video.play();
    }
  </script>

</body>
</html>
