import React from 'react';
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KrustyMapElements from '../components/KrustyMapElements';
import { showAttractions } from '../actions/index';

const URL = './img/KrustyLandMap.jpg';

class KrustyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  clicked(area) {
    this.setState({ showModal: true });
    console.log(`Clicked on ${area.id}`);
  }

  enterArea(area) {
    this.setState({});
    console.log(`Enter Area ${area.id}`);
  }

  leaveArea(area) {
    this.setState({});
    console.log(`Leave Area ${area.id}`);
  }

  render() {
    return (
      <div>
        <ImageMapper
          src={URL}
          map={KrustyMapElements}
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

const mapStateToProps = state => ({
  isAvailable: state.isAvailable,
});
const mapDispatchToProps = dispatch => (
  bindActionCreators({ showAttractions }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(KrustyMap);
