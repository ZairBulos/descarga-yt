import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Video } from '../../types/Video';
import ButtonLoader from '../Loader/ButtonLoader';

interface Props {
  video: Video | null;
  type: string;
  downloading: boolean;
  setType: (type: string) => void;
  handleDownload: () => void;
}

function Donwloader({ video, downloading, type, setType, handleDownload }: Props) {

  if (!video) return null;

  const formatDuration = (): string => {
    const minutes = Math.floor(video.duration / 60);
    const remainingSeconds = video.duration % 60;
    
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds.toString();
    
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <Card className="mx-auto" border="danger" style={{ maxWidth: '50rem' }}>
      <Row>
        <Col xs={12} md={4}>
          <Card.Img
            src={video.image}
            alt={video.title}
            loading="lazy"
            className="img-fluid h-100"
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body>
            <Card.Title>
              {video.title}
            </Card.Title>
            <Card.Text className="text-muted">
              {formatDuration()}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup aria-label="Basic example">
              {downloading ? (
                <ButtonLoader />
              ): (
                <Button onClick={handleDownload} variant="danger">
                  Descargar
                </Button>
              )}
              <select 
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="btn border-danger download-option"
              >
                <option value="mp3">MP3</option>
                <option value="mp4">MP4</option>
              </select>
            </ButtonGroup>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
}

export default Donwloader;