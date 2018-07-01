import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Update from '@material-ui/icons/Update';
import Accessibility from '@material-ui/icons/Accessibility';
import Star from '@material-ui/icons/Star';
import ChildCare from '@material-ui/icons/ChildCare';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import Explore from '@material-ui/icons/Explore';
import Restaurant from '@material-ui/icons/Restaurant';
import Hotel from '@material-ui/icons/Hotel';
import AllOut from '@material-ui/icons/AllOut';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

function attractionType(type) {
  switch (type) {
    case 'Romantic':
      return <FavoriteBorder />;
    case 'Sensations':
      return <FlightTakeoff />;
    case 'Humor':
      return <SentimentVerySatisfied />;
    case 'Other':
      return <Explore />;
    case 'Restaurant':
      return <Restaurant />;
    case 'Hotel':
      return <Hotel />;
    default:
      return <AllOut />;
  }
}

function SimpleModal(props) {
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.showModal}
        onClose={props.handleClose}
      >
        <div style={getModalStyle()} className={props.classes.paper}>
          <Typography variant="title" id="modal-title">
            {props.title}
          </Typography>
          <Typography variant="subheading" id="simple-modal-description">
            <List component="nav">
              <ListItem>
                <ListItemIcon>
                  {props.adult ? (<Accessibility />) : (<ChildCare />)}
                </ListItemIcon>
                <ListItemText primary={props.adult ? 'Adult only' : 'Childs allowed'} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  { attractionType(props.type) }
                </ListItemIcon>
                <ListItemText primary={props.type} />
              </ListItem>
              { props.waiting>0 &&
              <ListItem>
                <ListItemIcon>
                  <Update />
                </ListItemIcon>
                <ListItemText primary={props.waiting} />
              </ListItem>
              }
              { props.popularity>0 &&
                <ListItem>
                  <ListItemIcon>
                    <Star />
                  </ListItemIcon>
                  <ListItemText primary={props.popularity} />
                </ListItem>
              }
            </List>
          </Typography>
          <SimpleModalWrapped />
        </div>
      </Modal>
    </div>
  );
}

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
