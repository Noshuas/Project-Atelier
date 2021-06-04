import React from 'react';
import brain from './brain.js';
import APIcalls from './APIcalls';

APIcalls.get.then((result) => console.log(result));

let Ratings = function (props) {
  return (
    <div className="luka ratings">
    </div>
  );
};

export default Ratings;