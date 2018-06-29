import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchesGroup = (props) => {
  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={props.sensations}
              onChange={props.handleChange('sensations')}
              value="sensations"
              color='inherit'
            />
          }
          label="Sensations"
        />
        <FormControlLabel
          control={
            <Switch
              checked={props.Humour}
              onChange={props.handleChange('Humour')}
              value="Humour"
              color='inherit'
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
              color='inherit'
            />
          }
          label="Romantic"
        />
      </FormGroup>
    </FormControl>
  );
}

export default SwitchesGroup;
