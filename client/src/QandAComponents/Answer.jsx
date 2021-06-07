import React, { useState, useEffect } from 'react';

function Answer(props) {
  return (
    <div>
      <p>A: {props.info.body}</p>
    </div>
  );
}

export default Answer;