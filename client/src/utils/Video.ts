export const formatDuration = (duration: number): string => {
  const minutes = Math.floor(duration / 60);
  const remainingSeconds = duration % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds.toString();

  return `${formattedMinutes}:${formattedSeconds}`;
};