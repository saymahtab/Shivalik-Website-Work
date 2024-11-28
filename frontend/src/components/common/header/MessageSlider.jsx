import { useState, useEffect } from 'react';
import '../../styles/MessageSlider.css';

const MessageSlider = () => {
  const messages = [
    "📞 99971 55111",
    "Admission Open",
    "NAAC A+ Grade"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setFade(false); // Start fade-in effect
      }, 500); // Duration of fade-out effect
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [messages.length]);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setFade(false);
    }, 500);
  };

  const handlePrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
      setFade(false);
    }, 500);
  };

  return (
    <div className="message-slider-container">
      <button className="slider-arrow left-arrow" onClick={handlePrevious}>‹</button>
      <span className={`message-slider-content ${fade ? 'fade-out' : ''}`}>
        {messages[currentIndex]}
      </span>
      <button className="slider-arrow right-arrow" onClick={handleNext}>›</button>
    </div>
  );
};

export default MessageSlider;
