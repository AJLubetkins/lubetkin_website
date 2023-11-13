import React from 'react';

// Import all images from the 'images' directory
const imageContext = require.context('../assets/client_logos', false, /\.(jpg|jpeg|svg|png|webp)$/);

const ImageGallery = () => {
  const imageFiles = imageContext.keys();

  return (
    <div>
      {imageFiles.map((imageFile, index) => (
        <img key={index} src={imageContext(imageFile).default} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
