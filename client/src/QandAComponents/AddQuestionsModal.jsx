import React from 'react';

function QuestionsModal ({open, children}) {
  if (!open) {
    return null;
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default QuestionsModal;