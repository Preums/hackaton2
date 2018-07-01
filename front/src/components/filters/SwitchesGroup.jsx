import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchesGroup = props => (
  <FormControl component="fieldset">
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={props.Sensations}
            onChange={props.handleChange('Sensations')}
            value="Sensations"
            color="inherit"
          />
        }
        label="Sensations"
      />
      <FormControlLabel
        control={
          <Switch
            checked={props.Humor}
            onChange={props.handleChange('Humor')}
            value="Humor"
            color="inherit"
          />
        }
        label="Humour"
      />
      <FormControlLabel
        control={
          <Switch
            checked={props.Romantic}
            onChange={props.handleChange('Romantic')}
            value="Romantic"
            color="inherit"
          />
        }
        label="Romantic"
      />
    </FormGroup>
  </FormControl>
);

export default SwitchesGroup;
