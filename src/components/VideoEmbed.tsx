"use client";

interface VideoEmbedProps {
  /** YouTube 视频 ID 或完整 URL */
  videoId?: string;
  /** YouTube 完整 URL */
  youtubeUrl?: string;
  /** Vimeo 视频 ID 或完整 URL */
  vimeoUrl?: string;
  /** 本地视频文件路径（相对于 public 目录） */
  localVideo?: string;
  /** 视频标题（用于无障碍访问） */
  title?: string;
  /** 自定义类名 */
  className?: string;
  /** 是否自动播放（注意：大多数浏览器需要 muted 才能自动播放） */
  autoplay?: boolean;
  /** 是否静音 */
  muted?: boolean;
  /** 是否显示播放控件 */
  controls?: boolean;
}

export default function VideoEmbed({
  videoId,
  youtubeUrl,
  vimeoUrl,
  localVideo,
  title = "视频",
  className = "",
  autoplay = false,
  muted = false,
  controls = true,
}: VideoEmbedProps) {
  // 处理 YouTube URL
  const getYouTubeId = (url?: string, id?: string): string | null => {
    if (id) return id;
    if (!url) return null;
    
    // 处理各种 YouTube URL 格式
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/.*[?&]v=([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    
    return null;
  };

  // 处理 Vimeo URL
  const getVimeoId = (url?: string): string | null => {
    if (!url) return null;
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  // YouTube 视频
  if (youtubeUrl || videoId) {
    const id = getYouTubeId(youtubeUrl, videoId);
    if (!id) return null;

    const embedUrl = `https://www.youtube.com/embed/${id}?${new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      ...(autoplay && { autoplay: "1", mute: muted ? "1" : "0" }),
      ...(controls === false && { controls: "0" }),
    }).toString()}`;

    return (
      <div className={`relative w-full ${className}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    );
  }

  // Vimeo 视频
  if (vimeoUrl) {
    const id = getVimeoId(vimeoUrl);
    if (!id) return null;

    const embedUrl = `https://player.vimeo.com/video/${id}?${new URLSearchParams({
      ...(autoplay && { autoplay: "1", muted: muted ? "1" : "0" }),
      ...(controls === false && { controls: "0" }),
    }).toString()}`;

    return (
      <div className={`relative w-full ${className}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <iframe
            src={embedUrl}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    );
  }

  // 本地视频
  if (localVideo) {
    return (
      <div className={`relative w-full ${className}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <video
            src={localVideo}
            title={title}
            controls={controls}
            autoPlay={autoplay}
            muted={muted}
            className="h-full w-full object-cover"
            playsInline
          >
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    );
  }

  return null;
}

jsx
  
<VideoEmbed
  youtubeUrl="https://www.youtube.com/watch?v=Z2TcQ97t7fA"
  title="Bring Handwriting Back to Your Zoom Meetings - Instantly!"
/>
