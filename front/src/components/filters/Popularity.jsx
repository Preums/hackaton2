import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const styles = {
  checked: {},
};

class Popularity extends React.Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {

    return (
      <div>
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          color="default"
        />
        <Radio
          checked={this.state.selectedValue === 'b'}
          onChange={this.handleChange}
          value="b"
          color="default"
        />
        <Radio
          checked={this.state.selectedValue === 'c'}
          onChange={this.handleChange}
          value="c"
          color="default"
        />
        <Radio
          checked={this.state.selectedValue === 'd'}
          onChange={this.handleChange}
          value="d"
          color="default"
        />
      </div>
    );
  }
}

Popularity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Popularity);