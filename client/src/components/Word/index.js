import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    minHeight: 240,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Word(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { words } = props;

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            {words.word}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {words.typeOfWord} {words.jlptLevel && ' - ' + words.jlptLevel}
          </Typography>
          <Typography variant="body2" component="p">
            {words.meanings.map((meaning) => meaning)}
            {bull}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={words.link}
            target="_blank"
            rel="noopener"
            variant="body2"
          >
            Learn More
          </Link>
        </CardActions>
      </Card>
    </Fragment>
  );
}
