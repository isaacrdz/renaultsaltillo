import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    carsGrid:{
        maxWidth: '1200px',
        margin: 'auto'
    },
    carItem:{
        textAlign: 'center'
    },
    carCard:{
        padding: '1rem',
        textAlign: 'center',
        cursor: 'pointer',
        '& img':{
            width: '100%',
            maxWidth: '300px'
        },
        '& h5':{
            margin: 0,
            fontSize: '1rem',
            textTransform: 'uppercase',
            textAlign: 'center',

            [theme.breakpoints.up('md')]:{
                fontSize: '1.8rem',
            }
        }
    }
}));
export default useStyles;