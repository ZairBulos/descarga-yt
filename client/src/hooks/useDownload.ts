import { useState } from 'react';
import { createDownload, download } from '../utils/Download';

export const useDownload = () => {
  const [downloading, setDownloading] = useState<boolean>(false);
  const [visibleDownloader, setVisibleDownloader] = useState<boolean>(false);

  const toggleVisibility = (isVisible?: boolean) => {
    isVisible 
      ? setVisibleDownloader(isVisible)
      : setVisibleDownloader((prevValue) => !prevValue);
  };

  const onDownload = async (url: string, format: string) => {
    try {
      setDownloading(true);
      const res = await download(url, format);
      createDownload(res, format);
    } catch (error: any) {
      throw new Error(error);
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