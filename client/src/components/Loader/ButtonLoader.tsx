import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ButtonLoader() {
  return (
    <Button variant='danger' disabled>
      <Spinner
        as='span'
        animation='border'
        size='sm'
        role='status'
        aria-hidden='true'
      />
      Descargando...
    </Button>
  );
}

export default ButtonLoader;