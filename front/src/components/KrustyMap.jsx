import React from 'react';
import ImageMapper from 'react-image-mapper';
// import KrustyMapElements from './KrustyMapElements';

const URL = './img/KrustyLandMap.jpg';
const MAP = {
  name: 'my-map',
  areas: [
    { id: 0, shape: 'poly', coords: [1036, 577, 1145, 649, 1165, 577, 1163, 512, 1089, 466, 1048, 498] },
    { shape: 'circle', coords: [446, 537, 10] },
    { shape: 'circle', coords: [531, 450, 10] },
    { shape: 'circle', coords: [698, 299, 10] },
    { shape: 'circle', coords: [490, 391, 10] },
    { shape: 'circle', coords: [114, 346, 10] },
    { shape: 'circle', coords: [216, 347, 10] },
    { shape: 'circle', coords: [242, 458, 10] },
    { shape: 'circle', coords: [368, 268, 10] },
    { shape: 'circle', coords: [471, 310, 10] },
    { shape: 'circle', coords: [505, 345, 10] },
    { shape: 'circle', coords: [638, 370, 10] },
    { shape: 'circle', coords: [684, 312, 10] },
    { shape: 'circle', coords: [521, 270, 10] },
    { shape: 'circle', coords: [424, 211, 10] },
    { shape: 'circle', coords: [614, 118, 10] },
    { shape: 'circle', coords: [582, 184, 10] },
    { shape: 'circle', coords: [558, 229, 10] },
    { shape: 'circle', coords: [671, 126, 10] },
    { shape: 'circle', coords: [640, 54, 10] },
    { shape: 'circle', coords: [950, 145, 10] },
    { shape: 'circle', coords: [956, 165, 10] },
    { shape: 'circle', coords: [1051, 265, 10] },
    { shape: 'circle', coords: [894, 140, 10] },
    { shape: 'circle', coords: [830, 173, 10] },
    { shape: 'circle', coords: [773, 171, 10] },
    { shape: 'circle', coords: [741, 183, 10] },
    { shape: 'circle', coords: [712, 214, 10] },
    { shape: 'circle', coords: [681, 228, 10] },
    { shape: 'circle', coords: [940, 470, 10] },
    { shape: 'circle', coords: [848, 570, 10] },
    { shape: 'circle', coords: [959, 532, 10] },
    { shape: 'circle', coords: [1033, 505, 10] },
    { shape: 'circle', coords: [1061, 452, 10] },
    { shape: 'circle', coords: [1107, 515, 10] },
    { shape: 'circle', coords: [1092, 447, 10] },
    { shape: 'circle', coords: [1227, 391, 10] },
    { shape: 'circle', coords: [1304, 427, 10] },
    { shape: 'circle', coords: [1394, 156, 10] },
    { shape: 'circle', coords: [980, 536, 10] },
  ],
};


class KrustyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  enterArea() {
    this.setState({ });
    console.log(MAP.areas.id);
  }

  leaveArea() {
    this.setState({});
    console.log('Leave Area -1');
  }

  render() {
    return (
      <div>
        <ImageMapper
          src={URL}
          map={MAP}
          width={1177}
          height={681}
          // onLoad={() => this.load()}
          onClick={area => this.clicked(area)}
          onMouseEnter={area => this.enterArea(area)}
          onMouseLeave={area => this.leaveArea(area)}
          // onImageClick={evt => this.clickedOutside(evt)}
        />
      </div>
    );
  }
}

export default KrustyMap;
