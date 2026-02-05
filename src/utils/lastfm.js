const LASTFM_API_KEY = '619883f4a635293ac404e6c382ebe80e';
const LASTFM_USER = 'artoxicated';
const LASTFM_API_URL = 'https://ws.audioscrobbler.com/2.0/';

export const fetchRecentTrack = async () => {
  try {
    const response = await fetch(
      `${LASTFM_API_URL}?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch Last.fm data');
    }
    
    const data = await response.json();
    
    if (!data.recenttracks || !data.recenttracks.track || !data.recenttracks.track[0]) {
      return null;
    }
    
    const track = data.recenttracks.track[0];
    const isNowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
    
    return {
      name: track.name,
      artist: track.artist['#text'] || track.artist,
      album: track.album['#text'] || track.album,
      image: track.image[2]['#text'] || track.image[1]['#text'] || '',
      isPlaying: isNowPlaying,
      url: track.url,
      date: !isNowPlaying && track.date ? track.date.uts : null
    };
  } catch (error) {
    console.error('Error fetching Last.fm data:', error);
    return null;
  }
};

export const getTimeAgo = (timestamp) => {
  if (!timestamp) return '';
  
  const now = Math.floor(Date.now() / 1000);
  const diff = now - parseInt(timestamp);
  
  if (diff < 60) return 'Just now';
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
  return 'A while ago';
};
