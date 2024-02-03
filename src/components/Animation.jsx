// OpeningAnimation.js

import React, { useEffect, useState } from 'react';
import './animation.css';
import LogoAnimation from './LogoAnimation'; // Assuming you have a separate LogoAnimation component

const Animation = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`animation ${animate ? 'fade-in' : ''}`}>
      <LogoAnimation />
      {/* Any additional opening animation content goes here */}
    </div>
  );
};

export default Animation;
