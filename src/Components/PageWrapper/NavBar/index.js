import React, { Fragment,useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import SocialIcons from 'Components/socialIcons';

const menuData = [
    {title:"INICIO",to:'/'},
    {title:"VEHÍCULOS",to:'/vehiculos'},
    {title:"CONTACTO",to:'/contacto'}
]

const MenuList = ({classes,flexDirection='row'}) => {
    return (<Box className={classes.menu} display="flex" flexDirection={flexDirection}>
        {menuData.map((m,i) => {
            return <Link className="MenuItem MuiButtonBase-root MuiIconButton-root" key={`nv${i}`} to={m.to}>{m.title}</Link>
        })}
    </Box>)
}

const PageLogo = () => {
    return <Link to="/"><img className="logo" src="/assets/images/logo.png" alt="Renault" /></Link>
}

const DrawerMenu = ({classes,open,setDrawerMenu,state}) => {
    return (<Drawer classes={{root:classes.drawerMenu,paper:classes.drawerMenuPaper}} anchor="right" open={open} onClose={() => setDrawerMenu({open:false})}>
        <PageLogo />
        <MenuList flexDirection="column" classes={classes} />
        <SocialIcons social={state.social} color="#000" />
    </Drawer>)
}

const NavBar = ({classes,state}) =>{
    const [drawerMenu,setDrawerMenu] = useState({open:false});

    return(<Fragment>
        <AppBar className={classes.navBar} position="static">
            <Toolbar className={classes.toolBar} variant="dense">
                <PageLogo />
                <Box className={classes.menuBar}>
                    <MenuList classes={classes} />
                    <SocialIcons social={state.social} color="#000" />
                </Box>
                <Box display={{ xs: 'block', md: 'none' }}>
                    <IconButton  edge="start" className={classes.menuButton} aria-label="menu" onClick={() => setDrawerMenu({open:true})}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <DrawerMenu {...drawerMenu} setDrawerMenu={setDrawerMenu} classes={classes} state={state} />
    </Fragment>)
}

export default NavBar;