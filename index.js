const yt = require("yt-converter");
const videoId = 'IM89MNpdbXc'
const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
yt.getInfo(videoUrl).then(info => {
    // console.log(info);
    const title = info.title
    const audioLane = info.formatsAudio.find( audioinfo => audioinfo.audioBitrate === 128 )
    if (audioLane) {
        const audioItag = audioLane.itag
        yt.convertAudio({
            url: videoUrl,
            itag: audioItag,
            directoryDownload: __dirname,
            title: title
        }, undefined, undefined)
    }
});

