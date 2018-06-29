import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchLabels = (props) => {
  return (
    <FormGroup row >
      <FormControlLabel
        control={
          <Switch
            checked={props.isAdult}
            onChange={props.handleChange('isAdult')}
            value ={props.isAdult}
            color='inherit'
          />
        }
        label={props.isAdult?"Majeur":"Mineur"}
      />
    </FormGroup>
  );
}

export default SwitchLabels;