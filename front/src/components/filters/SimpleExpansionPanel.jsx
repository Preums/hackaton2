import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwitchLabels from './SwitchLabels';
import SwitchesGroup from './SwitchesGroup';
import RadioButtonsGroup from './RadioButtonsGroup';
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

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ background: '#FFD600' }}>
      <ExpansionPanel style={{ background: '#FFD600' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            className={classes.heading}
            style={{
              fontFamily: 'typeface-luckiest-guy bold',
              fontWeight: 'bold',
            }}
          >
            VOTRE AGE
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <SwitchLabels label="Majeur" />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ background: '#FFD600' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            className={classes.heading}
            style={{
              fontFamily: 'typeface-luckiest-guy bold',
              fontWeight: 'bold',
            }}
          >
            TYPE D'ATTRACTION
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <SwitchesGroup />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ background: '#FFD600' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            className={classes.heading}
            style={{
              fontFamily: 'typeface-luckiest-guy bold',
              fontWeight: 'bold',
            }}
          >
            TEMPS D'ATTENTE
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <RadioButtonsGroup />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ background: '#FFD600' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            className={classes.heading}
            style={{
              fontFamily: 'typeface-luckiest-guy bold',
              fontWeight: 'bold',
            }}
          >
            POPULARITE
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
