import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImgCmp = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/getimages');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={`data:image/jpeg;base64,${image.imageData}`} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImgCmp;
