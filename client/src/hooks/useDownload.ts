import { useState } from 'react';
import { Field } from '../types/Field';
import { createDownload, download } from '../utils/Download';

export const useDownload = () => {
  const [downloading, setDownloading] = useState<boolean>(false);
  const [visibleDownloader, setVisibleDownloader] = useState<boolean>(false);

  const toggleVisibility = (isVisible?: boolean) => {
    isVisible 
      ? setVisibleDownloader(isVisible)
      : setVisibleDownloader((prevValue) => !prevValue);
  };

  const onDownload = async (url: Field<string>, format: Field<string>) => {
    try {
      setDownloading(true);
      const res = await download(url.value, format.value);
      createDownload(res, format.value);
    } catch (error) {
      console.log(error);
    } finally {
      setDownloading(false);
    }
  };

  return {
    visibleDownloader,
    toggleVisibility,
    downloading,
    onDownload
  }
};