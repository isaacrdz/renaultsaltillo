import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogHeader from '../Utils/Header';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './styles';

const ContentDialog = props => {
  const {open,onClose,title,maxWidth,scroll,component} = props
  const dialogClasses = useStyles();

  return (
    <Dialog
      fullWidth
      aria-labelledby={title}
      open={open}
      maxWidth={maxWidth ? maxWidth : 'xl'}
      classes={{ paper: dialogClasses.paper }}
      scroll={scroll ? scroll : 'paper'}
    >
      <DialogHeader title={title} onClose={onClose} />
      {open && <DialogContent className={dialogClasses.content}>
        {component && React.createElement(component,{...props,component:null,maxWidth:null})}
      </DialogContent>}
    </Dialog>
  );
};

export default ContentDialog;
