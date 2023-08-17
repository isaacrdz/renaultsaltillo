import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    form:{
        margin: 'auto',
        width: '100%',
        maxWidth: '800px',
        padding: '.5rem',
        '& hr':{
            marginTop: '1rem',
            marginBottom: '1rem'
        }
    },
    map:{
        width: '100%',
        minWidth: 300,
        height: '100%',
        minHeight: 300,
        maxHeight: 600,
        border: 0
    },
    formThanks:{
        width: '100%',
        maxWidth: '800px',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
        paddingTop: '.5rem',
        paddingBottom: '.5rem'
    }
});
export default useStyles;