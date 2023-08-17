import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=> ({
    container: {        
        padding: 0,
        minWidth: '320px',
        boxShadow: '-10px 0 8px -8px black, 10px 0 8px -8px black',
        paddingBottom: '10px',
        minHeight: '100vh',
        backgroundColor: '#f7f7f7'
    },
    navBar:{
        background: '#f8f9fa',
        padding: '.5rem 0rem'
    },
    menuBar:{
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    },
    menu:{
        '& .MenuItem':{
            textDecoration: 'none',
            borderRadius: 0,
            fontSize: '1rem',
            fontWeight: '500',
        }
    },
    toolBar:{
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    menuButton:{
        color: '#000'
    },
    drawerMenu:{
        '& .logo':{
            padding: '1rem'
        }
    },
    drawerMenuPaper:{
        padding: '.5rem',
        minWidth: '300px'
    },
    pageBody: {
        minHeight: 'calc(100vh - 130px)',
        padding: '.5rem',
        paddingTop: '1rem'
    },
    footer: {
        background: '#7c7c7c',
        padding: '.5rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .text': {
            color: '#FFF',
            textAlign: 'center'
        }
    }
}));
export default useStyles;