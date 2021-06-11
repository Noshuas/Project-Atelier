import React from 'react';
import ReactDOM from 'react-dom';
// could make more generic

const modal_styles = {
  top: '70%',
  position: 'fixed',
  left: '50%',
  padding: '50px',
  backgroundColor: 'white',
  zIndex: 1000,
  transform: 'translate(-50%, -50%)',
};

const form_style = {
  maxHeight: 'calc(100vh - 300px)',
  overflowY: 'auto',
  overflowX: 'hidden'
};

const overlay_styles = {
  position: 'fixed',
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
        <div style={form_style}>
          {children}
        </div>
      </div>
      {/* <button onClick={onClose}>Submit</button> */}
    </div>,
    document.getElementById('portal')
  );
}

export default GenericModal;