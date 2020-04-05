import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

const DateComponent = () => {
  const classes = useStyles();
  const date = new Date();

  return (
    <div className={classes.wrapper}>
      <span>{date.getMonth() + 1}월 {date.getDate()}일</span>
      <div className={classes.wod}>
        <span>Burpees</span>
      </div>
    </div>
  );
};

export default DateComponent;