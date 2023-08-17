import React from 'react';
import {AccessTime} from '@material-ui/icons';
import useStyles from './styles';

const Schedule = ({schedules}) => {
    const classes = useStyles();

    return (<div className={classes.schedule}>
        <AccessTime className={classes.icon} />
        <div className={classes.times}>
            {schedules.map((sch,inx) => <p key={`sch${inx}`}>{sch}</p>)}
        </div>
    </div>)
}

export default Schedule;