import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { form } from '../../data.json';

const useStyles = makeStyles(theme => ({
  button: {
    maxWidth: '80%',
    height: '5rem',
    fontSize: '1.4rem',
  },
}));


const Submit = () => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      size="large"
      fullWidth
      onClick={() => window.open(form)}
    >
      오늘의 운동 제출하기
    </Button>
  )
};

export default Submit;