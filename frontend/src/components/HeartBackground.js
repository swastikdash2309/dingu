import React, { useEffect } from 'react';

const HeartBackground = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      
      const colors = ['#FFB7C5', '#D8B4F8', '#E6E6FA', '#FFD4ED'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      heart.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="${randomColor}" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      `;
      
      heart.style.left = Math.random() * 100 + '%';
      heart.style.width = (Math.random() * 20 + 15) + 'px';
      heart.style.animationDuration = (Math.random() * 8 + 12) + 's';
      heart.style.animationDelay = Math.random() * 5 + 's';
      heart.style.opacity = Math.random() * 0.3 + 0.3;
      
      document.querySelector('.heart-container')?.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 20000);
    };

    const interval = setInterval(createHeart, 2000);
    for (let i = 0; i < 8; i++) {
      setTimeout(createHeart, i * 400);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="heart-container fixed inset-0 pointer-events-none z-0" 
      data-testid="heart-background"
    />
  );
};

export default HeartBackground;
