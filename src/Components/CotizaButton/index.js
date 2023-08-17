import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const CotizaButton = () => {
    const classes = useStyles();
    return (<div className={classes.cotizaButton}>
        <Link to="/contacto">
            <img src={`assets/images/cotizar.gif`} alt="Cotizar" />
        </Link>
    </div>)
}

export default CotizaButton;