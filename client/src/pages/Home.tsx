import FormDownload from '../components/Downloader/FormDownload';
import Guide from '../components/Guide/Guide';
import Main from '../components/Main/Main';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <Container>
      <Main />
      <FormDownload />
      <Guide />
    </Container>
  );
}

export default Home;