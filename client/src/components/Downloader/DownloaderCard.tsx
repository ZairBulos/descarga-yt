import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Donwloader.css';

import { Video } from '../../types/Video';
import { Field } from '../../types/Field';
import ButtonLoader from '../Loader/ButtonLoader';
import { formatDuration } from '../../utils/Video';

interface Props {
  video: Video | null;
  downloading: boolean;
  format: Field<string>;
  handleDownload: () => void;
}

function DownloaderCard({ video, format, downloading, handleDownload }: Props) {

  const formattedDuration = video ? formatDuration(video.duration) : '';

  return video ? (
    <section className='mt-5'>
      <Card className='mx-auto card-video' border='dark' bg='light'>
        <Row>
          <Col xs={12} md={4}>
            <Card.Img
              src={video.image}
              alt={video.title}
              loading='lazy'
              className='img-fluid h-100'
            />
          </Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <Card.Title>
                {video.title}
              </Card.Title>
              <Card.Text className='text-muted'>
                {formattedDuration}
              </Card.Text>
            </Card.Body>
            <Card.Footer className='card-video-footer'>
              <ButtonGroup aria-label='Basic example'>
                {downloading ? (
                  <ButtonLoader />
                ) : (
                  <Button onClick={handleDownload} variant='danger'>
                    Descargar
                  </Button>
                )}
                <select
                  id='format'
                  value={format.value}
                  onChange={(e) => format.onChange(e.target.value)}
                  className='btn border-danger download-option'
                >
                  <option value='mp3'>MP3</option>
                  <option value='mp4'>MP4</option>
                </select>
              </ButtonGroup>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </section>
  ) : null;
}

export default DownloaderCard;