import { lazy, Suspense } from 'react';

import DownloaderForm from './DownloaderForm';
import { useDownload } from '../../hooks/useDownload';
import { useField } from '../../hooks/useField';
import { useInformation } from '../../hooks/useInformation';
const Loader = lazy(() => import('../Loader/Loader'));
const DownloaderCard = lazy(() => import('./DownloaderCard'));
const ErrorAlert = lazy(() => import('../Alert/ErrorAlert'));

interface FormValues {
  url: string;
}

function Downloader() {
  const download = useDownload();
  const video = useInformation();
  const url = useField<string>('');
  const format = useField<string>('mp3');
  const error = useField<boolean>(false);
  const msgError = useField<string>('');

  const handleInformation = async (newUrl: FormValues) => {
    try {
      url.onChange(newUrl.url);
      await video.onInformation(newUrl.url);
      download.toggleVisibility(true);
      error.onChange(false);
    } catch (e) {
      error.onChange(true);
      msgError.onChange('No se pudo obtener la información del vídeo.');
      download.toggleVisibility(false);
    }
  };

  const handleDownload = async () => {
    try {
      await download.onDownload(url.value, format.value);
      error.onChange(false);
    } catch (e) {
      error.onChange(true);
      msgError.onChange('No se pudo realizar la descarga.');
    }
  };

  return (
    <section className='py-5'>
      <DownloaderForm
        onSubmit={handleInformation}
      />

      <Suspense>
        {video.loading ? (
          <Loader />
        ) :
          download.visibleDownloader ? (
            <DownloaderCard
              format={format}
              video={video.value}
              downloading={download.downloading}
              handleDownload={handleDownload}
            />
          ) : null}

        {error.value && (
          <ErrorAlert
            message={msgError.value}
            onClose={() => error.onChange(false)}
          />
        )}
      </Suspense>
    </section>
  );
}

export default Downloader;