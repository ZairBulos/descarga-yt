import { lazy, Suspense } from 'react';

import DownloaderForm from './DownloaderForm';
import { useDownload } from '../../hooks/useDownload';
import { useField } from '../../hooks/useField';
import { useInformation } from '../../hooks/useInformation';
const Loader = lazy(() => import('../Loader/Loader'));
const DownloaderCard = lazy(() => import('./DownloaderCard'));

interface FormValues {
  url: string;
}

function Downloader() {
  const download = useDownload();
  const url = useField<string>('');
  const format = useField<string>('mp3');
  const video = useInformation(url.value);

  const handleInformation = (newUrl: FormValues) => {
    url.onChange(newUrl.url);
    download.toggleVisibility(true);
  };

  const handleDownload = () => {
    download.onDownload(url, format);
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
          download.visibleDownloader && (
            <DownloaderCard
              format={format}
              video={video.value}
              downloading={download.downloading}
              handleDownload={handleDownload}
            />
          )}
      </Suspense>
    </section>
  );
}

export default Downloader;