const yt = require("yt-converter");

const videoId = 'IM89MNpdbXc'
const link = `https://www.youtube.com/watch?v=${videoId}`

async function download(url) {
  const data = await yt.Audio({
    url,
    onDownloading: (d) => console.log(d),
  });

  console.log(data.message);
}

download(link);