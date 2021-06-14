import React, { useState, useEffect } from 'react';
import brain from './brain.jsx';
import RandRAPIcalls from './RandRAPIcalls';


//Expects setPhotos prop which updates array of pic urls in the form
function UploadPhotos(props) {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    let imageUrls = [];
    images.forEach(image => imageUrls.push(image.secure_url));
    props.setPhotos(imageUrls);
  }, [images]);

  function onChange(e) {
    let files = Array.from(e.target.files);
    //Limits number of images to 5
    files = files.slice(0, 5);
    setUploading(true);

    let formData = new FormData();

    files.forEach((file, i) => {
      formData.append('file', file);
    });

    RandRAPIcalls.cloudinary(formData)
      .then(images => {
        setUploading(false);
        setImages(images.data);
      });
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
  let style = {
    display: 'inline-block',
    marginRight: '20px',
    maxWidth: '70px',
    maxHeight: '70px'
  };

  return (
    props.images.map((image, i) =>
      <div key={i} className="fadeIn" style={style}>
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