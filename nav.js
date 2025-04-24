slider.addEventListener('transitionend', () => {
    updateDots(currentIndex);
  });

// JS auto-slide interval
setInterval(nextSlide, 6000); // fine, but make sure transitions complete in time

