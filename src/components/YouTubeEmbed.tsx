'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface YouTubeEmbedProps {
  videoUrl: string;
}

export default function YouTubeEmbed({ videoUrl }: YouTubeEmbedProps) {
  // Extract video ID from YouTube URL or use the ID directly
  const getVideoId = (url: string) => {
    // If it's already just an ID (11 characters, alphanumeric), return it
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
      return url;
    }

    // Otherwise, try to extract from URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    return null;
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg mb-8">
      <LiteYouTubeEmbed
        id={videoId}
        title="Tutorial Video"
        poster="hqdefault"
      />
    </div>
  );
}
