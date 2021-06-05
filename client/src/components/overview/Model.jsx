import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="overview">
        <div className="sale"></div>
        <div className="picture">
          <div className="small-pic-container">
            <div className="small-picture"></div>
            <div className="small-picture"></div>
            <div className="small-picture"></div>
            <div className="small-picture"></div>
            <div className="small-picture"></div>
          </div>
        </div>
        <div className="details">
          <div className="small-picture"></div>
        </div>
        <div className="description"></div>
      </section>
    );
  }
}

export default Overview;