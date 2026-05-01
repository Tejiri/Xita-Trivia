

// Utility to convert seconds into hours/minutes/seconds and formatted strings

function secondsToHMS(totalSeconds: number) {
  const sec = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  return { hours, minutes, seconds };
}

/**
 * Format seconds as "HH:MM:SS" or "MM:SS" if hours === 0 and showHours === false
 * @param totalSeconds seconds to format
 * @param showHours when true always include hours (e.g. "00:05:30")
 */
function formatHMS(totalSeconds: number, showHours = false) {
  const { hours, minutes, seconds } = secondsToHMS(totalSeconds);
  const pad = (n: number) => String(n).padStart(2, "0");

  if (!showHours && hours === 0) {
    return `${pad(minutes)}:${pad(seconds)}`;
  }
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export { formatHMS, secondsToHMS };
