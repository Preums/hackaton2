import React from 'react';
import ImageMapper from 'react-image-mapper';

const URL = './img/KrustyLandMap.jpg';
const MAP = {
  name: 'my-map',
  areas: [
    { shape: 'poly', coords: [25, 33, 27, 300, 128, 240, 128, 94] },
    { shape: 'poly', coords: [219, 118, 220, 210, 283, 210, 284, 119] },
    { shape: 'poly', coords: [381, 241, 383, 94, 462, 53, 457, 282] },
    { shape: 'poly', coords: [245, 285, 290, 285, 274, 239, 249, 238] },
  ],
};

class KrustyMap extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <ImageMapper
          src={URL}
          map={MAP}
          // width={500}
          // onLoad={() => this.load()}
          // onClick={area => this.clicked(area)}
          // onMouseEnter={area => this.enterArea(area)}
          // onMouseLeave={area => this.leaveArea(area)}
          onImageClick={evt => this.clickedOutside(evt)}
        />
      </div>
    );
  }
}

export default KrustyMap;
