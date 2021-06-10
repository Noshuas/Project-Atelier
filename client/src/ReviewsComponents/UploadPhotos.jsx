import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';

function UploadPhotos(props) {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);

  function onChange(e) {
    let files = Array.from(e.target.files);
    setUploading(true);

    let formData = new FormData();

    files.forEach((file, i) => {
      formData.append('file', file);
    });

    RandRAPIcalls.cloudinary(files[0]);
    //API CALL
    // .then(res => {
    //   setUploading(false);
    //   setImages(res);
    // })
  }

  function removeImage(id) {
    setImages(images.filter(image => image.public_id !== id));
  }

  function content() {
    switch (true) {
    case uploading:
      return (<Spinner />);
    case images.length > 0:
      return <Images images={images} removeImage={removeImage} />;
    default:
      return <Buttons onChange={onChange} />;
    }
  }


  return (
    <div>
      <div className="buttons">
        {content()}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div className="spinner">
      <i className="fas fa-spinner fadeIn"></i>
    </div>
  );
}

function Images(props) {
  return (
    prop.images.map((image, i) =>
      <div key={i} className="fadeIn">
        <div
          onClick={() => props.removeImage(image.public_id)}
          className="delete">
          <i className="fas fa-times-circle"></i>
        </div>
        <img src={image.secure_url} alt='' />
      </div>
    )
  );
}

function Buttons(props) {


  return (
    <div className="buttons fadeIn">
      <div className="button">
        <label htmlFor="single">
          <i className="fas fa-image"></i>
        </label>
        <input type="file" id="single" onChange={props.onChange} />
      </div>

      <div className="button">
        <label htmlFor="multi">
          <i className="fas fa-images"></i>
        </label>
        <input type="file" id="multi" onChange={props.onChange} multiple />
      </div>
    </div>
  );
}

export default UploadPhotos;