import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const LoadingDialog = ({ open, title = 'Loading...', text = '' }) => {
  const classes = useStyles();
  const dialogClasses = {
    root: classes.root,
    paper: classes.paper,
    scrollPaper: classes.container
  };

  return (
    <Dialog aria-labelledby={title} open={open} classes={dialogClasses}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <div className={classes.box}>
        <CircularProgress />
      </div>
    </Dialog>
  );
};

export default LoadingDialog;
