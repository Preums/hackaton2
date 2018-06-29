import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import 'typeface-roboto';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

const RadioButtonsGroup = (props) => {
  return (
    <div style={{ background : '#FFD600' }}>
      <FormControl component="fieldset" required >
        <RadioGroup
          aria-label="gender"
          name="gender2"
          className={props.classes.group}
          value={props.value}
          onChange={props.handleChecked}
        >
          <FormControlLabel style={{ fontFamily : 'typeface-roboto' }} value="ten" control={<Radio color='inherit' />} label="< 10 minutes" />
          <FormControlLabel value="thirty" control={<Radio color='inherit' />} label="< 30 minutes" />
          <FormControlLabel value="Forty-five" control={<Radio color='inherit' />} label="< 45 minutes" />
          <FormControlLabel value="sixty" control={<Radio color='inherit' />} label="< 60 minutes" />
          
        </RadioGroup>
      </FormControl>
    </div>)
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);