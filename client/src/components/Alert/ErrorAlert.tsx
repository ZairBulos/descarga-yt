import Alert from 'react-bootstrap/Alert';

interface Props {
  message: string;
  onClose: () => void;
}

function ErrorAlert({ message, onClose }: Props) {
  return (
    <Alert variant='danger' dismissible onClose={onClose} className='mt-5'>
      <Alert.Heading>
        Ups... Ocurrio un error!
      </Alert.Heading>
      <p>
        {message}
      </p>
    </Alert>
  );
}

export default ErrorAlert;