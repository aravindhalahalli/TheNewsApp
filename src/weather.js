import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Column, Row } from 'simple-flexbox';
import $ from 'jquery';
import lifecycle from 'react-pure-lifecycle';
const styles = theme => ({
  card: {
    display: 'flex',
    width:350,
    marginLeft:20,
    marginRight:20,
    marginTop:5,

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {

    float:'right',
    width: 50,
    height:50  },
});

const methods = {
  componentDidMount(props) {
    var fixmeTop = $('.card').offset().top;
    $(window).scroll(function() {
       var currentScroll = $(window).scrollTop();
       if (currentScroll >= fixmeTop) {
           $('.card').css({
               position: 'fixed',
               top: '0',
               left: '0'
           });
       } else {
           $('.card').css({
               position: 'static'
           });
       }
    });  }
};


function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
    <Row>
        <Column>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.city}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.temp}°C
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            {props.condition}
          </Typography>
        </CardContent>
      </div>
      </Column>
      <Column Vertical="center"><CardMedia image className={classes.cover} src={props.im}></CardMedia></Column>
      </Row>
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(lifecycle(methods))(MediaControlCard);