const BASE_API = import.meta.env.VITE_BASE_API;

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
  } catch (error) {
    console.log(error);
    throw new Error();
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
  } catch (error) {
    console.log(error);
    throw new Error('Error');
  }
};