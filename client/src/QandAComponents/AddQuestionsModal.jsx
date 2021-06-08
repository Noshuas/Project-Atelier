import React from 'react';
// could make more generic
function QuestionsModal ({open, children, onClose}) {
  if (!open) {
    return null;
  }
  return (
    <div>
      {children}
      {/* <button onClick={onClose}>Submit</button> */}
    </div>
  );
}

export default QuestionsModal;