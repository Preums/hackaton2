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
      popularity: 0,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  clicked() {
    const filterList = this.props.filters;
    if (
      (this.state.waiting > filterList.Waiting) ||
      (parseInt(this.state.popularity, 10) < parseInt(filterList.Popularity, 10)) ||
      (this.state.adult && !filterList.Adult) ||
      ((this.state.type === 'Sensations') && !filterList.Sensations) ||
      ((this.state.type === 'Humor') && !filterList.Humor) ||
      ((this.state.type === 'Romantic') && !filterList.Romantic)
    ) {
      this.setState({
        showModal: false,
      });
    } else {
      this.setState({
        showModal: true,
      });
    }
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
      popularity: parseInt(attractionInformations.bestlike, 10),
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
          fillColor={this.state.availabilityColor}
          onClick={area => this.clicked(area)}
          onMouseEnter={area => this.enterArea(area)}
        />
        <SimpleModal showModal={this.state.showModal} handleClose={this.handleClose} title={this.state.title} adult={this.state.adult} type={this.state.type} waiting={this.state.waiting} popularity={this.state.popularity} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAvailable: state.isAvailable,
  filters: state.filters,
});
const mapDispatchToProps = dispatch => (
  bindActionCreators({ showAttractions }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(KrustyMap);
