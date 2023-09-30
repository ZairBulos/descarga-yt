import { downloadAudio, downloadVideo } from '../services/youtube';

export const download = async (url: string, format: string) => {
  try {
    return format === 'mp3'
      ? await downloadAudio(url)
      : await downloadVideo(url);
  } catch (error) {
    throw error;
  }
};

export const createDownload = (res: string, type: string) => {
  const a = document.createElement('a');

  a.href = res;
  a.download = type === 'mp3' ? 'audio.mp3' : 'video.mp4';
  a.style.display = 'none';

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
};