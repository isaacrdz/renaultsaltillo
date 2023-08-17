import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    servicesBoxes:{
        background: '#efefef',
        overflow: 'hidden',
        padding: '1rem',
        '& h2':{
            textAlign: 'center'
        }
    },
    servicesGrid:{
        margin: 'auto',
        maxWidth: '1200px',
    },
    serviceBox:{
        textAlign: 'center',
        cursor: 'pointer',
        '& img':{
            width: '100%'
        }
    }
});

export default useStyles;