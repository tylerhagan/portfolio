import { useState, useEffect } from 'react';
import { fetchRecentTrack, getTimeAgo } from '../utils/lastfm';
import './NowPlaying.css';

const NowPlaying = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const loadTrack = async () => {
      const data = await fetchRecentTrack();
      setTrack(data);
      setLoading(false);
    };

    loadTrack();
    const interval = setInterval(loadTrack, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      // Collapse when scrolled to bottom
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setIsCollapsed(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || loading || !track) {
    return null;
  }

  return (
    <div className={`now-playing ${isCollapsed ? 'collapsed' : ''}`}>
      <button 
        className="close-button" 
        onClick={() => setIsVisible(false)}
        aria-label="Close now playing"
      >
        ×
      </button>
      
      <div className="now-playing-header">
        <div className="music-icon">♫</div>
        <div className="now-playing-title">
          {track.isPlaying ? 'Now Playing' : 'Last Played'}
        </div>
      </div>
      
      {!isCollapsed && (
        <div className="track-info">
          {track.image && (
            <div className="album-art">
              <img src={track.image} alt="Album art" />
            </div>
          )}
          <div className="track-details">
            <a 
              href={track.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="track-name"
            >
              {track.name}
            </a>
            <div className="track-artist">{track.artist}</div>
            {!track.isPlaying && track.date && (
              <div className="track-time">{getTimeAgo(track.date)}</div>
            )}
            {track.isPlaying && (
              <div className="playing-indicator">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
