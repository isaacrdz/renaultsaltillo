import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    cotizaButton:{
        position: 'relative',
        height: '100px',
        '& a':{
            position:'absolute',
            top: 5,
            right: 0
        },
        [theme.breakpoints.up('lg')]:{
            position: 'fixed',
            top: '75px',
            right: 0
        }
    }
}));
export default useStyles;