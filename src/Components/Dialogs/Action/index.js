import React from 'react';
import { isArray } from 'lodash';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const ActionButton = ({actionResponse,label,action,data}) =>{
  return (<Button onClick={() => actionResponse({ action, data })}>
    {label}
  </Button>)
}

const ActionDialog = ({
  open,
  actionResponse,
  title,
  message,
  data,
  buttons
}) => {
  const classes = useStyles();
  const actionsBtns = isArray(buttons) ? buttons : [{label:'ACCEPT',action:true},{label:'CANCEL',action:false}];
  return (
    <Dialog open={open} classes={{ paper: classes.paper }} scroll="paper">
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.text}>{message}</div>
      <DialogActions>
        {actionsBtns.map((button,index)=>{
          return <ActionButton key={`abt${index}`} {...button} data={data} actionResponse={actionResponse} />
        })}
      </DialogActions>
    </Dialog>
  );
};

export default ActionDialog;
