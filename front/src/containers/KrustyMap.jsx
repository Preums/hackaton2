import React from 'react';
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KrustyMapElements from '../components/KrustyMapElements';
import { showAttractions } from '../actions/index';
import SimpleModal from './SimpleModal';

const URL = './img/KrustyLandMap.jpg';

class KrustyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
    };
    this.handleClose = this.handleClose.bind(this);
  }

  clicked(area) {
    this.setState({
      showModal: true,
      title: area.name,
    });
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  enterArea() {
    this.setState({});
  }

  leaveArea() {
    this.setState();
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
        <SimpleModal showModal={this.state.showModal} handleClose={this.handleClose} title={this.state.title} />
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
