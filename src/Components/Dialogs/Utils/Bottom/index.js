import React from 'react';
import useStyles from './styles';

const DialogBottom = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.bottom}>
      <hr />
      {children}
    </div>
  );
};

export default DialogBottom;
