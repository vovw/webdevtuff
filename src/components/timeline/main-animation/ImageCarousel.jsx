import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

const imgs = [
  "https://i.imgur.com/8oJ3HvF.jpeg",
  "https://i.imgur.com/kLB0jvk.jpeg",
  "https://i.imgur.com/R4q1rEU.jpeg",
  "https://i.imgur.com/Lu4ltOF.jpeg",
  "https://i.imgur.com/x5AD1yW.jpeg",
  "https://i.imgur.com/pIdINGN.jpeg",
  "https://i.imgur.com/dsMAQW3.jpeg",
  "https://i.imgur.com/WwxPHav.jpeg",
  "https://i.imgur.com/AEysrMF.jpeg",
  "https://i.imgur.com/IdGhmGR.jpeg",
  "https://i.imgur.com/qdXZRJ3.jpeg",
  "https://i.imgur.com/6HLtyoi.jpeg",
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % imgs.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + imgs.length) % imgs.length);
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
