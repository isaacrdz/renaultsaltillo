import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    titles:{
        textAlign: 'center'
    },
    gridCards:{
        margin: 'auto',
        maxWidth: '1200px'
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '& .content':{
            flexGrow: 1
        },
        '& h1':{
            fontWeight: '800'
        },
        '& h6':{
            fontSize: '.8rem',
            fontWeight: '800'
        },
        '& hr':{
            marginTop: '1rem',
            marginBottom: '1rem'
        },
        '& .terms':{
            lineHeight: '.8rem',
            fontSize: '.6rem',
            padding: '.5rem'
        }
    },
    cardMedia:{
        width: '100%'
    }
});
export default useStyles;