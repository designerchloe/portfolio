//video resizing

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
      
  
      if (video.src !== newSource) {
        video.src = newSource; // Update the video src directly
        video.load(); // Reload video to apply the new source
      }
    });
  }
  
  // Initial check
  updateAllVideoSources();
  
  // Add event listener for window resize with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateAllVideoSources, 300);
  });