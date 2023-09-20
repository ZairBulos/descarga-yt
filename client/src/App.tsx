import { useState } from 'react';
import { downloadAudio, downloadVideo } from './services/youtube';

function App() {
  const [url, setUrl] = useState<string>('');

  const handleAudioDownload = async () => {
    try {
      const res = await downloadAudio(url);
      handleDownload(res, 'audio.mp3');
    } catch (error) {
      console.error(error);
    }
  };

  const handleVideoDownload = async () => {
    try {
      const res = await downloadVideo(url);
      handleDownload(res, 'video.mp4');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = (res: string, type: string) => {
    const a = document.createElement('a');
    
    a.href = res;
    a.download = type;
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  };

  return (
    <>
      <form>
        <label htmlFor="url">
          url
        </label>
        <input
          type="text"
          id="url"
          name="url"
          placeholder="YouTube URL"
          onChange={(e) => { setUrl(e.target.value) }}
        />
        <button type="button" onClick={handleVideoDownload}>
          Download video
        </button>
        <button type="button" onClick={handleAudioDownload}>
          Download audio
        </button>
      </form>
    </>
  );
}

export default App;