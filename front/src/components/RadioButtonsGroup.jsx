import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 10,
    value: 30,
    value: 45,
    value: 60
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl component="fieldset" required >
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="ten" control={<Radio color="primary" />} label="10 minutes" />
            <FormControlLabel value="thirty" control={<Radio color="primary" />} label="30 minutes" />
            <FormControlLabel value="Forty-five" control={<Radio color="primary" />} label="45 minutes" />
            <FormControlLabel value="sixty" control={<Radio color="primary" />} label="60 minutes" />
            
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);