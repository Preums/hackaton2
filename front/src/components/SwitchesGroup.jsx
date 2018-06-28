import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchesGroup extends React.Component {
  state = {
    sensations: true,
    Humour: false,
    Romantic: true,
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.sensations}
                onChange={this.handleChange('sensations')}
                value="sensations"
                color="primary"
              />
            }
            label="Sensations"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.Humour}
                onChange={this.handleChange('Humour')}
                value="Humour"
                color="primary"
              />
            }
            label="Humour"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.Romantic}
                onChange={this.handleChange('Romantic')}
                value="Romantic"
                color="primary"
              />
            }
            label="Romantic"
          />
        </FormGroup>
      </FormControl>
    );
  }
}

export default SwitchesGroup;
