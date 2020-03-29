import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { video } from '../../data';

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
})

const Video = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <iframe className={classes.iframe} width="100%" height="auto" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
    </div>
  );
}

export default Video;