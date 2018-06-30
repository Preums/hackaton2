import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwitchLabels from '../components/filters/SwitchLabels';
import SwitchesGroup from '../components/filters/SwitchesGroup';
import RadioButtonsGroup from '../components/filters/RadioButtonsGroup';
import Popularity from '../components/filters/Popularity';
import 'typeface-luckiest-guy';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class SimpleExpansionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'sixty',
      valueTen: 10,
      valueThirty: 30,
      valueFortyFive: 45,
      valueSixty: 60,
      sensations: true,
      Humour: true,
      Romantic: true,
      isAdult: false,
      selectedValue: 5,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleNotation = this.handleNotation.bind(this);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChecked = event => {
    this.setState({ value: event.target.value });
  };

  handleNotation = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} style={{ background: '#FFD600' }}>
        <ExpansionPanel style={{ background: '#FFD600' }}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ fontFamily: 'Luckiest Guy' }} >
              VOTRE AGE
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{ fontFamily: 'Luckiest Guy' }} >
              <SwitchLabels label="Majeur" handleChange={this.handleChange} isAdult={this.state.isAdult} />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ background: '#FFD600' }}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ fontFamily: 'Luckiest Guy' }} >
              TYPE D'ATTRACTION
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{ fontFamily: 'Luckiest Guy' }} >
              <SwitchesGroup handleChange={this.handleChange} sensations={this.state.sensations} Humour={this.state.Humour} Romantic={this.state.Romantic} />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ background: '#FFD600' }}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ fontFamily: 'Luckiest Guy'  }}  >
              TEMPS D'ATTENTE
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{ fontFamily: 'Luckiest Guy' }} >
              <RadioButtonsGroup handleChecked={this.handleChecked} value={this.state.value} />
            </Typography>
          </ExpansionPanelDetails>
          </ExpansionPanel>
 
          <ExpansionPanel style={{ background:'#FFD600' }}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ fontFamily: 'Luckiest Guy' }} >
                POPULARITE
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <Popularity handleNotation={this.handleNotation} selectedValue={parseInt(this.state.selectedValue, 10)} />
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
      </div>
    );
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
