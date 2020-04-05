import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    height: '4rem',
    fontSize: '2rem',
    textAlign: 'center',
    paddingTop: '1rem',
  }
});

const DateComponent = () => {
  const classes = useStyles();
  const date = new Date();

  return (
    <div className={classes.wrapper}>
      <span>{date.getMonth() + 1}월 {date.getDate()}일</span>
    </div>
  );
};

export default DateComponent;