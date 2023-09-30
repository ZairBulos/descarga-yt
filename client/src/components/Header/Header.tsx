import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <header>
      <Navbar className='bg-yt header-shadow'>
        <Container>
          <Navbar.Brand href='/' className='text-white'>
            YouTube Downloader
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default React.memo(Header);