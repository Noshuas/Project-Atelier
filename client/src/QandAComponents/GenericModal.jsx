import React from 'react';
import ReactDOM from 'react-dom';
// could make more generic

const modal_styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: '50px',
  backgroundColor: 'white',
  zIndex: 1000,
  transform: 'translate(-50%, -50%)'
};

const overlay_styles = {
  //position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

function GenericModal ({open, children, onClose}) {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div>
      <div style={overlay_styles}/>
      <div style={modal_styles}>
        <button className="exit-modal" onClick={onClose}>Exit</button>
        {children}
      </div>
      {/* <button onClick={onClose}>Submit</button> */}
    </div>,
    document.getElementById('portal')
  );
}

export default GenericModal;