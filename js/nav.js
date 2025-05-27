slider.addEventListener('transitionend', () => {
    updateDots(currentIndex);
  });

// JS auto-slide interval
setInterval(nextSlide, 6000); 

