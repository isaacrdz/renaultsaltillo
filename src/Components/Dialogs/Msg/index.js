import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogHeader from '../Utils/Header';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './styles';

const MessageBody = ({classes,message,icon}) => {
  if(icon){
    return (<div className={classes.iconText}>
      <icon.component style={{color:icon.color}} /> <p className={classes.text}>{message}</p>
    </div>)
  }
  return <p className={classes.text}>{message}</p>
}

const MsgDialog = ({ open, onClose, title, message, scroll, icon }) => {
  const classes = useStyles();

  return (
    <Dialog
      aria-labelledby={title}
      open={open}
      classes={{ paper: classes.paper }}
      scroll={scroll ? scroll : 'paper'}
    >
      <DialogHeader title={title} onClose={onClose} classes={classes} />
      <DialogContent className={classes.content}>
        <MessageBody classes={classes} message={message} icon={icon} />
      </DialogContent>
    </Dialog>
  );
};

export default MsgDialog;
