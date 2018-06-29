import React from 'react';
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KrustyMapElements from '../components/KrustyMapElements';
import { showAttractions } from '../actions/index';

const URL = './img/KrustyLandMap.jpg';

class KrustyMap extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <ImageMapper
          src={URL}
          map={KrustyMapElements}
          // width={500}
          // onLoad={() => this.load()}
          onClick={area => this.clicked(area)}
          // onMouseEnter={area => this.enterArea(area)}
          // onMouseLeave={area => this.leaveArea(area)}
          // onImageClick={evt => this.clickedOutside(evt)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAvailable: state.isAvailable,
});
const mapDispatchToProps = dispatch => (
  bindActionCreators({ showAttractions }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(KrustyMap);
