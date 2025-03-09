
// This utility helps reveal elements when they scroll into view

export const initializeScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };
  
  // Initial check
  reveal();
  
  // Add event listener
  window.addEventListener('scroll', reveal);
  
  // Return cleanup function to remove the listener when needed
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};

export const animatePageTransition = (callback: () => void, delay = 300) => {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-background z-50 animate-fade-in';
  document.body.appendChild(overlay);
  
  // Wait for animation to complete
  setTimeout(() => {
    // Execute callback (page change)
    callback();
    
    // Remove overlay with fade out
    overlay.classList.remove('animate-fade-in');
    overlay.classList.add('animate-fade-out');
    
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 400);
  }, delay);
};
