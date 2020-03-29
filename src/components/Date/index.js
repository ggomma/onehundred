import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { date } from '../../data';

const useStyles = makeStyles({
  wrapper: {
    height: '6rem',
    fontSize: '2rem',
    textAlign: 'center',
    paddingTop: '1rem',
  },
  wod: {
    marginTop: '0.8rem',
    fontSize: '1.2rem',
  }
});

const Date = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <span>{date}</span>
      <div className={classes.wod}>
        <span>Burpees</span>
      </div>
    </div>
  );
};

export default Date;