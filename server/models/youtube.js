const ytdl = require('ytdl-core');

class YoutubeModel {
  static async getBasicInfo(videoURL) {
    const basicInfo = await ytdl.getBasicInfo(videoURL);
    return basicInfo;
  }

  static validateURL(videoURL) {
    const isValidVideo = ytdl.validateURL(videoURL);
    return isValidVideo;
  }

  static downloadAudio(videoURL, res) {
    ytdl(videoURL, {
      format: 'mp3',
      filter: 'audioonly',
    }).pipe(res);
  }

  static downloadVideo(videoURL, res) {
    ytdl(videoURL, {
      format: 'mp4',
      filter: 'videoandaudio'
    }).pipe(res);
  }
}

module.exports = YoutubeModel;