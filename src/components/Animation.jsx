// OpeningAnimation.js

import React, { useEffect, useState } from 'react';
import './animation.css';
import LogoAnimation from './LogoAnimation'; // Assuming you have a separate LogoAnimation component

const Animation = () => {
  const [showAnimation, setShowAnimation] = useState(true); // Initially set to true

  useEffect(() => {
    // Set to false after 2 seconds (adjust the duration as needed)
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`animation ${showAnimation ? 'visible' : ''}`}>
      {/* Your opening animation content goes here */}
      <div className="animation-content">
        <LogoAnimation/>
        
      </div>
    </div>
  );
};

export default Animation;
