import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Guide() {
  return (
    <section>
      <Container className="py-5">
        <h2 className="text-center">
          ¿Cómo descargar vídeos de YouTube?
        </h2>
        <Row className="d-flex justify-content-center mx-auto py-5">
          <Col xs={12} md={4} className="text-center">
            <span className="circle">1</span>
            <p className="mt-3">Abra el video de YouTube en una nueva pestaña y copie su URL de la barra de direcciones del navegador.</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <span className="circle">2</span>
            <p className="mt-3">Pegue el enlace en el formulario, desde la parte superior de la página, y haga clic en el botón "Convertir" para ejecutar el proceso.</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <span className="circle">3</span>
            <p className="mt-3">Seleccione el formato que desee y luego haga clic en el botón "Descargar". Espere unos segundos a que se complete la descarga.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Guide;