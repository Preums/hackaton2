import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchLabels extends React.Component {
  state = {
    isAdult: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.isAdult}
              onChange={this.handleChange('isAdult')}
              value="isAdult"
              color="primary"
            />
          }
          label={this.props.label}
        />
      </FormGroup>
    );
  }
}

export default SwitchLabels;