import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//a077679a4f504e31bf47ab838b535296

const styles = {
  card: {
    maxWidth: 345,
    margin:10
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} >
      <CardActionArea>
        <iframe width="100%" height="250" src={props.li[1]} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.li[0]}
          </Typography>
          <Typography component="p">
            {props.li[2]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);