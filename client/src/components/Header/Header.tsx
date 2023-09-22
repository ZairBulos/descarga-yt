import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar className="bg-yt header-shadow">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            YouTube Downloader
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;