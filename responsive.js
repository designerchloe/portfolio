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

  // // Initial check
  // updateAllVideoSources();
  
  // // Add event listener for window resize with debounce
  // let resizeTimeout;
  // window.addEventListener('resize', () => {
  //   clearTimeout(resizeTimeout);
  //   resizeTimeout = setTimeout(updateAllVideoSources, 300);
  // });

  let resizeTimeout;
  window.addEventListener('DOMContentLoaded', updateAllVideoSources);
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateAllVideoSources, 300);
  });

//   // Intersection Observer to handle video play/pause on viewport visibility
// function handleVideoPlayback(entries) {
//   entries.forEach(entry => {
//       if (entry.isIntersecting) {
//           entry.target.play().catch(error => console.log('Autoplay blocked:', error));
//       } else {
//           entry.target.pause();
//       }
//   });
// }

// // Initialize the observer
// const observer = new IntersectionObserver(handleVideoPlayback, {
//   threshold: 0.5 // 50% of the video must be visible to trigger playback
// });

// // Attach observer to all videos
// const videos = document.querySelectorAll('.responsive-video');
// videos.forEach(video => observer.observe(video));

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
