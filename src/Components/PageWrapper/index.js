import React, { useContext } from 'react';
import { StoreContext } from 'GlobalData';
import NavBar from './NavBar';
import Footer from './Footer';
import useStyles from './styles';

const PageWrapper = ({children}) => {
    const { state } = useContext(StoreContext);
    const classes = useStyles();
    return (<div>
        <NavBar classes={classes} state={state} />
        <div className={classes.pageBody}>
            {children}
        </div>
        <Footer classes={classes} state={state} />
    </div>)
}

export default PageWrapper;