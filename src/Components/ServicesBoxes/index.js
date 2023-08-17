import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const ServiceBox = ({title,image,to,classes}) => {
    const srvImage = `assets/images/services/${image}`;
    return (<Grid item xs={6} md={4} className={classes.serviceBox}>
        <Link to={to}><img src={srvImage} alt={title} /></Link>
    </Grid>); 
}

const ServicesBoxes = ({services}) => {
    const classes = useStyles();
    return (<Box className={classes.servicesBoxes}>
        <h2>OPCIONES DE SERVICIOS</h2>
        <Grid className={classes.servicesGrid} container spacing={1} direction="row" justify="center" alignItems="stretch">
            {services.map((srv,inx) => {
                return <ServiceBox key={`srv${inx}`} {...srv} classes={classes} />
            })}
        </Grid>
    </Box>)
}

export default ServicesBoxes;