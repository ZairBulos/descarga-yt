import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import Loader from '../Loader/Loader';
import Donwloader from './Downloader';
import { Video } from '../../types/Video';
import { getInfo, downloadAudio, downloadVideo } from '../../services/youtube';

function FormDownload() {
  const [url, setUrl] = useState<string>('');
  const [type, setType] = useState<string>('mp3');
  const [info, setInfo] = useState<Video | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [downloading, setDownloading] = useState<boolean>(false);

  const handleInformation = async (e: React.FormEvent<HTMLElement>) => {
    try {
      e.preventDefault();

      if (url === '') {
        setInfo(null);
      } else {
        setLoading(true);

        const newInfo = await getInfo(url);
        setInfo(newInfo);

        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);

      let res;
      if (type === 'mp3') {
        res = await downloadAudio(url);
      } else {
        res = await downloadVideo(url);
      }

      createDownload(res);
    } catch (error) {
      console.error(error);
    } finally {
      setDownloading(false);
    }
  };

  const createDownload = (res: string) => {
    const a = document.createElement('a');

    a.href = res;
    a.download = type === 'mp3' ? 'audio.mp3' : 'video.mp4';
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  };

  return (
    <>
      <Form onSubmit={handleInformation} className="py-5">
        <InputGroup>
          <Form.Control
            size="lg"
            type="search"
            onChange={(e) => { setUrl(e.target.value) }}
            placeholder="Pegue el enlace de su vídeo aquí"
          />
          <Button type="submit" variant="danger">
            Convertir
          </Button>
        </InputGroup>
      </Form>

      {loading
        ? <Loader />
        : <Donwloader
          video={info}
          type={type}
          setType={setType}
          downloading={downloading}
          handleDownload={handleDownload}
        />
      }
    </>
  );
}

export default FormDownload;