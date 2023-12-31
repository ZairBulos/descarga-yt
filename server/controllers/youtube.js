const ytRouter = require('express').Router();
const YoutubeModel = require('../models/youtube');

ytRouter.get('/info', async (req, res) => {
  const videoURL = req.query.url;
  const isValidURL = YoutubeModel.validateURL(videoURL);

  if (!isValidURL) {
    return res.status(400).json({ error: 'Invalid video URL' });
  }

  const info = await YoutubeModel.getBasicInfo(videoURL);
  const infoJSON = {
    title: info.videoDetails.title,
    duration: Number(info.videoDetails.lengthSeconds),
    image: info.videoDetails.thumbnails[4].url
  };

  res.json(infoJSON);
});

ytRouter.post('/download-audio', async (req, res) => {
  const videoURL = req.query.url;
  const isValidURL = YoutubeModel.validateURL(videoURL);

  if (!isValidURL) {
    return res.status(400).json({ error: 'Invalid video URL' });
  }

  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Content-Disposition', 'attachment; filename="title.mp3"');

  YoutubeModel.downloadAudio(videoURL, res);
});

ytRouter.post('/download-video', async (req, res) => {
  const videoURL = req.query.url;
  const isValidURL = YoutubeModel.validateURL(videoURL);

  if (!isValidURL) {
    return res.status(400).json({ error: 'Invalid video URL' });
  }

  res.setHeader('Content-Type', 'video/mp4');
  res.setHeader('Content-Disposition', 'attachment; filename="title.mp4"');

  YoutubeModel.downloadVideo(videoURL, res);
});

module.exports = ytRouter;