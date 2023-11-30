import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const imgs = [
  'https://cdn.discordapp.com/attachments/1142426341002711040/1149739540840456192/img2.jpg',
  'https://cdn.discordapp.com/attachments/1142426341002711040/1149739541066961046/img3.jpg',
  'https://cdn.discordapp.com/attachments/1142426341002711040/1149739541347971153/img4.jpg',
  'https://cdn.discordapp.com/attachments/1142426341002711040/1149739541603819612/img5.jpg',
  'https://cdn.discordapp.com/attachments/1142426341002711040/1149739541868072960/img6.jpg',
  'https://cdn.discordapp.com/attachments/1142426341002711040/1149739540555247620/img1.jpg',
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex( index === imgs.length - 1 ? 0 : index + 1 );
  };

  const handlePrev = () => {
    setIndex(index === 0 ? imgs.length - 1 : index - 1);
   };
   

  const calculateStyles = (imageIndex) => {
    const xOffsetStep = 100;
    const count = imgs.length;
    const scaleStep = 0.6;
    const opacityStep = 0.5;

    const sign = Math.sign(imageIndex - index);

    let xOffset = (imageIndex - index) * xOffsetStep;
    if (imageIndex !== index) {
      xOffset = xOffset + 80 * sign;
    }
    const scale = scaleStep ** Math.abs(imageIndex - index);
    const rotateY = imageIndex === index ? 0 : 30 * -sign;

    const opacity = Math.pow(opacityStep, Math.abs(imageIndex - index));
    const zIndex = count - Math.abs(index - imageIndex);

    return {
      transform: `perspective(800px) translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
    };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <div className="CarouselWrapper">
      <div className="ImageCarouselContainer">
        {imgs.map((imgSrc, i) => (
          <img
            key={i}
            src={imgSrc}
            alt={`Image ${i + 1}`}
            className="Image"
            style={calculateStyles(i)}
          />
        ))}
        <div className="Arrows">
          <svg
            className="Arrow prev"
            onClick={handlePrev}
            viewBox="0 0 256 512"
            width="100"
            title="angle-left"
          >
            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
          </svg>
          <svg
            className="Arrow next"
            onClick={handleNext}
            viewBox="0 0 256 512"
            width="100"
            title="angle-right"
          >
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
