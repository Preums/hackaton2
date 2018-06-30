import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const styles = {
  checked: {},
};

function Popularity(props) {
  return (
    <div>
      <Radio
        checked={props.selectedValue === 0}
        onChange={props.handleNotation}
        value={0}
        color="default"
      />
      <Radio
        checked={props.selectedValue === 1}
        onChange={props.handleNotation}
        value={1}
        color="default"
      />
      <Radio
        checked={props.selectedValue === 2}
        onChange={props.handleNotation}
        value={2}
        color="default"
      />
      <Radio
        checked={props.selectedValue === 3}
        onChange={props.handleNotation}
        value={3}
        color="default"
      />
      <Radio
        checked={props.selectedValue === 4}
        onChange={props.handleNotation}
        value={4}
        color="default"
      />
      <Radio
        checked={props.selectedValue === 5}
        onChange={props.handleNotation}
        value={5}
        color="default"
      />
    </div>
  );
}

Popularity.propTypes = {
  selectedValue: PropTypes.number,
  handleNotation: PropTypes.func,
};

export default withStyles(styles)(Popularity);