import { useState, useEffect } from 'react';
import { fetchRecentTrack, getTimeAgo } from '../utils/lastfm';
import './StatusBar.css';

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Berlin',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});

const useBerlinTime = () => {
  const [time, setTime] = useState(() => timeFormatter.format(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeFormatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
};

const useNowPlaying = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const loadTrack = async () => {
      const data = await fetchRecentTrack();
      if (!cancelled) setTrack(data);
    };

    loadTrack();
    const interval = setInterval(loadTrack, 30000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return track;
};

const StatusBar = () => {
  const time = useBerlinTime();
  const track = useNowPlaying();

  return (
    <div className="status-bar" role="contentinfo">
      <div className="status-group status-location">
        <span className="status-coords">BER 52.5200°N 13.4050°E</span>
        <span className="status-time">{time} CET</span>
      </div>

      <div className="status-group status-track">
        {track && (
          <>
            {track.isPlaying ? (
              <span className="status-eq" aria-label="Now playing">
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
              </span>
            ) : (
              <span className="status-track-label">last played</span>
            )}
            <a
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className="status-track-link"
              title={`${track.name} — ${track.artist}`}
            >
              {track.name} — {track.artist}
            </a>
            {!track.isPlaying && track.date && (
              <span className="status-track-time">{getTimeAgo(track.date).toLowerCase()}</span>
            )}
          </>
        )}
      </div>

      <div className="status-group status-links">
        <a href="https://github.com/tylerhagan" target="_blank" rel="noopener noreferrer">gh↗</a>
        <a href="https://www.linkedin.com/in/tylerhagan/" target="_blank" rel="noopener noreferrer">in↗</a>
        <a href="mailto:hello@tylerhagan.co.uk">mail↗</a>
      </div>
    </div>
  );
};

export default StatusBar;
