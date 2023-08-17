import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from 'Components/socialIcons';

const Footer = ({classes,state}) => {
    const { footer } = state;
    return (<div className={classes.footer}>
        <Link className="text" to="/avisodeprivacidad">{footer.legal}</Link>
        <div className="text">{footer.address}</div>
        <SocialIcons social={state.social} />
    </div>)
}

export default Footer;