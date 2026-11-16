(() => {
  'use strict';
  const config = window.HANGEOREUM_CONFIG || {};
  const safeUrl = (value) => {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
      const url = new URL(value.trim(), document.baseURI);
      return ['https:', 'http:'].includes(url.protocol) ? url : null;
    } catch { return null; }
  };
  const videoUrl = safeUrl(config.videoUrl);
  if (videoUrl) {
    const stage = document.getElementById('video-stage');
    const isYoutube = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be', 'www.youtube-nocookie.com'].includes(videoUrl.hostname);
    let media;
    if (isYoutube) {
      const id = videoUrl.hostname === 'youtu.be' ? videoUrl.pathname.slice(1) : videoUrl.searchParams.get('v') || videoUrl.pathname.split('/').filter(Boolean).at(-1);
      if (/^[\w-]{11}$/.test(id || '')) {
        media = document.createElement('iframe');
        media.src = `https://www.youtube-nocookie.com/embed/${id}`;
        media.title = '한걸음 앱 소개 영상';
        media.loading = 'lazy';
        media.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen';
        media.allowFullscreen = true;
      }
    } else {
      media = document.createElement('video');
      media.controls = true;
      media.playsInline = true;
      media.preload = 'metadata';
      media.src = videoUrl.href;
      media.setAttribute('aria-label', '한걸음 앱 소개 영상');
      media.textContent = '이 브라우저에서는 영상을 재생할 수 없습니다.';
      media.addEventListener('error', () => {
        document.getElementById('video-status').textContent = '영상을 불러올 수 없어요';
      });
    }
    if (media) {
      stage.replaceChildren(media);
      document.getElementById('video-status').textContent = '재생할 수 있어요';
    }
  }
  const apkUrl = safeUrl(config.apkUrl);
  const link = document.getElementById('apk-link');
  if (apkUrl) {
    link.href = apkUrl.href;
    link.removeAttribute('aria-disabled');
    link.removeAttribute('role');
    link.setAttribute('download', 'hangeoreum-demo.apk');
    link.textContent = 'Android 데모 다운로드 ↓';
    const version = typeof config.version === 'string' && config.version.trim() ? `${config.version.trim()} · ` : '';
    document.getElementById('apk-caption').textContent = `${version}Android용 APK 파일을 다운로드합니다.`;
  } else {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('apk-caption').textContent = '아직 공개된 APK가 없어요. 조금만 기다려 주세요.';
    });
    link.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); link.click(); }
    });
  }
})();
