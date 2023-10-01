import { useRef, useState } from 'react';

import { Video } from '../types/Video';
import { Information } from '../types/Information';
import { getInfo } from '../services/youtube';

export const useInformation = (): Information => {
  const [value, setValue] = useState<Video | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const previousUrl = useRef<string | null>();

  const onInformation = async (url: string) => {
    try {
      if (url && url !== previousUrl.current) {
        previousUrl.current = url;
        setLoading(true);

        const newInfo = await getInfo(url);
        setValue(newInfo);
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    value,
    loading,
    onInformation
  }
};