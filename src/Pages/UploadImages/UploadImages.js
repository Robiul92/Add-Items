import React, { useState } from 'react';

const UploadImages = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);

      fetch('http://localhost:5000/uploadimage', {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          setImageUrl(data.imageUrl);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button className='btn bg-blue' onClick={handleUpload}>Upload</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
};

export default UploadImages;
