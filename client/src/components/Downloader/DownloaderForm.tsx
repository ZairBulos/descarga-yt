import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './Donwloader.css';

interface FormValues {
  url: string;
}

interface Props {
  onSubmit: (values: FormValues) => void;
}

function DownloaderForm({ onSubmit }: Props) {

  const initialValues: FormValues = {
    url: ''
  };

  const validationSchema = yup.object().shape({
    url: yup.string()
      .required('El campo URL es obligatorio')
      .matches(
        /^https:\/\/www\.youtube\.com\/watch\?v=.+$/,
        'La URL debe ser un enlace válido de YouTube'
      )
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputGroup>
            <Field
              id='url'
              name='url'
              type='search'
              placeholder='Pegue el enlace de su vídeo aquí'
              className='form-control form-control-lg input-video'
            />
            <Button type='submit' variant='danger' disabled={isSubmitting}>
              Convertir
            </Button>
          </InputGroup>
          <ErrorMessage name='url' component='div' className='text-danger' />
        </Form>
      )}
    </Formik>
  );
}

export default DownloaderForm;