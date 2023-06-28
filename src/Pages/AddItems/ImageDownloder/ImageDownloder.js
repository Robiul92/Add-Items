import React, { useEffect, useState } from 'react';

const ImageDownloader = () => {
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    // Fetch the image names from the backend API
    fetch("http://localhost:5000/images")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImageNames(data.imageNames);
      })
      .catch((error) => {
        console.error("Error fetching image names:", error);
      });
  }, []);

  const downloadImage = (imageName) => {
    const imageUrl = `http://localhost:5000/images/${imageName}`;

    window.open(imageUrl, "_blank");
  };

  return (
    <div className='text-center'>
      <h1>Image Gallery</h1>
      <div className="grid grid-cols-3 gap-4 content-center p-3">
        {imageNames.map((imageName) => (
          <div key={imageName} className="imageWrapper">
            <img
              src={`http://localhost:5000/images/${imageName}`}
              alt={imageName}
              className="image"
            />
            <button onClick={() => downloadImage(imageName)}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDownloader;
