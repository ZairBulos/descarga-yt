import { Video } from '../types/Video';
const BASE_API = import.meta.env.VITE_BASE_API;

export const getInfo = async (url: string): Promise<Video> => {
  try {
    const response = await fetch(`${BASE_API}/info?url=${url}`);

    if (!response.ok) {
      throw new Error(`Http Status! ${response.status}`);
    }

    const data = await response.json() as Video;
    return data;
  } catch (error: any) {
    throw new Error(`Error al realizar la solicitud: ${error.message}`);
  }
};

export const downloadAudio = async (url: string) => {
  try {
    const response = await fetch(`${BASE_API}/download-audio?url=${url}`, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`Http Status! ${response.status}`);
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error: any) {
    throw new Error(`Error al realizar la solicitud: ${error.message}`);
  }
};

export const downloadVideo = async (url: string) => {
  try {
    const response = await fetch(`${BASE_API}/download-video?url=${url}`, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`Http Status! ${response.status}`);
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error: any) {
    throw new Error(`Error al realizar la solicitud: ${error.message}`);
  }
};