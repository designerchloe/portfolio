//video resizing

const normalizeURL = (url) => new URL(url, window.location.origin).href;

function getVideoSource(sources, width) {
    if (width > 600) {
      return sources.desktop;
    } else {
      return sources.mobile;
    }
  }
  
  function updateAllVideoSources() {
    const videos = document.querySelectorAll('.responsive-video');
  
    videos.forEach((video) => {
      const sources = JSON.parse(video.getAttribute('data-sources')); // Parse data-sources attribute
      const width = window.innerWidth;
      const newSource = getVideoSource(sources, width);
      
  
      if (video.src && normalizeURL(video.currentSrc) !== normalizeURL(newSource)) {
        console.log(normalizeURL(video.currentSrc));
        console.log(normalizeURL(newSource));
        video.src = newSource; // Update the video src directly
        video.load(); // Reload video to apply the new source
        video.play().catch(() => console.log('Autoplay may be blocked.'));
      }
    });
  };


  let resizeTimeout;
  window.addEventListener('DOMContentLoaded', updateAllVideoSources);
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateAllVideoSources, 300);
  });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.play().catch(() => console.log('Autoplay blocked.'));
      } else {
          entry.target.pause(); // Only pause, no reload
      }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.responsive-video').forEach(video => observer.observe(video));

