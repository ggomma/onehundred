import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import $ from 'jquery';

import { wod } from '../../data';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
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
  },
  title: {
    margin: 'auto',
    marginBottom: '1rem',
    fontSize: '1.2rem',
  }
})

const Video = () => {
  const classes = useStyles();

  const [data, setData] = useState({
    title: '',
    link: '',
  });

  useEffect(() => {
    axios
      .get(wod)
      .then(result => {
        const date = new Date();
        const dateFormat = `${date.getMonth() + 1}/${date.getDate()}`;

        const d = $('<div/>').html(result.data).contents();
        const data = d.find('tbody').find('td').filter(function() {
          return $(this).text() === dateFormat;
        }).closest("tr");
        
        const todayWod = {
          title: '',
          link: '',
        };
        data.find('td').toArray().forEach((d, i) => {
          if (i === 1) {
            todayWod.title = $(d).text();
          } else if (i === 2) {
            todayWod.link = $(d).text();
          }
        });
        setData(todayWod);
      });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span>{data.title}</span>
      </div>
      <div className={classes.wrapper}>
        <iframe className={classes.iframe} width="100%" height="auto" src={data.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
      </div>
    </div>
  );
}

export default Video;