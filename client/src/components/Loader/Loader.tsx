import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className="text-center">
      <Spinner
        animation="border"
        variant="danger"
        style={{
          width: '3rem',
          height: '3rem',
        }}
      />
    </div>
  );
}

export default Loader;