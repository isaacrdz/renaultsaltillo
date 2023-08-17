import React, { Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useStyles from './styles';

const DialogHeader = ({ title, onClose }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {onClose && <IconButton aria-label="close" classes={{ root: classes.closeButton }} onClick={() => onClose({ open: false })}>
            <CloseIcon />
          </IconButton>}
      </div>
      <Divider />
    </Fragment>
  );
};

export default DialogHeader;
