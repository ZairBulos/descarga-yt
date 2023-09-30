import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Guide.css';

function Guide() {
  return (
    <section className='py-5'>
      <Container>
        <h2 className='text-center'>
          ¿Cómo descargar vídeos de YouTube?
        </h2>
        <Row className='d-flex justify-content-center mx-auto py-5'>
          <Col xs={12} md={4} className='text-center'>
            <span className='circle-number' aria-label='Paso 1' aria-describedby='step1-description'>1</span>
            <p className='mt-3' id='step1-description'>Abra el video de YouTube en una nueva pestaña y copie su URL de la barra de direcciones del navegador.</p>
          </Col>
          <Col xs={12} md={4} className='text-center'>
            <span className='circle-number' aria-label='Paso 2' aria-describedby='step2-description'>2</span>
            <p className='mt-3' id='step2-description'>Pegue el enlace en el formulario, desde la parte superior de la página, y haga clic en el botón 'Convertir' para ejecutar el proceso.</p>
          </Col>
          <Col xs={12} md={4} className='text-center'>
            <span className='circle-number' aria-label='Paso 3' aria-describedby='step3-description'>3</span>
            <p className='mt-3' id='step3-description'>Seleccione el formato que desee y luego haga clic en el botón 'Descargar'. Espere unos segundos a que se complete la descarga.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default React.memo(Guide);