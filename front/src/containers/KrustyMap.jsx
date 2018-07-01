import React from 'react';
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KrustyMapElements from '../components/KrustyMapElements';
import { showAttractions } from '../actions/index';
import SimpleModal from '../components/SimpleModal';

const URL = './img/KrustyLandMap.jpg';

class KrustyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      adult: false,
      type: '',
      waiting: 0,
      popularity: 5,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  clicked() {
    this.setState({
      showModal: true,
    });
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  enterArea(area) {
    const attractionInformations = this.props.isAvailable.find(list => list.name === area.name);
    this.setState({
      title: attractionInformations.name,
      adult: (parseInt(attractionInformations.minAge, 10) < 18) ? false : true,
      type: attractionInformations.type,
      waiting: attractionInformations.waiting,
      popularity: attractionInformations.bestlike,
    });
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
          // onMouseLeave={area => this.leaveArea(area)}
        // onImageClick={evt => this.clickedOutside(evt)}
        />
        <SimpleModal showModal={this.state.showModal} handleClose={this.handleClose} title={this.state.title} adult={this.state.adult} type={this.state.type} waiting={this.state.waiting} popularity={this.state.popularity} />
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
