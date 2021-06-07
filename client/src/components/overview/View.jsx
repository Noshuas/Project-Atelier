import React from 'react';

export function Overview() {

  return (
    <section className="overview">
      <div className="sale">Offer</div>
      <div className="picture"> Picture
        <div className="small-pic-container">
          <div className="small-picture"></div>
          <div className="small-picture"></div>
          <div className="small-picture"></div>
          <div className="small-picture"></div>
          <div className="small-picture"></div>
        </div>
      </div>
      <div className="details">Details
        <div className="small-picture"></div>
      </div>
      <div className="description">Description</div>
    </section>
  );
}