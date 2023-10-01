import { Video } from './Video';

export interface Information {
  value: Video | null;
  loading: boolean;
  onInformation: (url: string) => void;
}