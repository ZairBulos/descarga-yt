const ytRouter = require('express').Router();
const YoutubeModel = require('../models/youtube');

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