import React from 'react';

const Exhibition= () => {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyles = {
    fontSize: '100px', // Adjust the font size as needed
    fontFamily: 'Garamond, serif',
    // fontStyle: 'italic',
    color: 'yellow', // Set the text color to white
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyles}>Coming Soon!</h1>
    </div>
  );
};

export default Exhibition;

