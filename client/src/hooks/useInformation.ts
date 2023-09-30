import { useEffect, useRef, useState } from 'react';

import { Video } from '../types/Video';
import { Information } from '../types/Information';
import { getInfo } from '../services/youtube';

export const useInformation = (url: string): Information => {
  const [value, setValue] = useState<Video | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const previousUrl = useRef<string | null>();

  useEffect(() => {
    getInformation();
  }, [url]);

  const getInformation = async () => {
    try {
      if (url && url !== previousUrl.current) {
        previousUrl.current = url;
        setLoading(true);

        const newInfo = await getInfo(url);
        setValue(newInfo);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    value,
    loading
  }
};