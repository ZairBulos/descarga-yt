const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

const {
  videoURL,
  badVideoURL,
} = require('./test_helper');

describe('Getting information', () => {
  test('video information returned as json', async () => {
    await api
      .get(`/api/youtube/info?url=${videoURL}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  }, 90000);

  test('invalid URL', async () => {
    const response = await api
      .get(`/api/youtube/info?url=${badVideoURL}`)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body).toStrictEqual({
      error: 'Invalid video URL'
    });
  });
});

describe('Downloading audio', () => {
  test('success', async () => {
    await api
      .post(`/api/youtube/download-audio?url=${videoURL}`)
      .expect(200)
      .expect('Content-Type', /audio\/mpeg/);
  }, 90000);

  test('invalid URL', async () => {
    const response = await api
      .post(`/api/youtube/download-audio?url=${badVideoURL}`)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body).toStrictEqual({
      error: 'Invalid video URL'
    });
  });
});

describe('Downloading video', () => {
  test('sucess', async () => {
    await api
      .post(`/api/youtube/download-video?url=${videoURL}`)
      .expect(200)
      .expect('Content-Type', /video\/mp4/);
  }, 90000);

  test('invalid URL', async () => {
    const response = await api
      .post(`/api/youtube/download-video?url=${badVideoURL}`)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body).toStrictEqual({
      error: 'Invalid video URL'
    });
  });
});