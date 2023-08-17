import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    banners:{
        position: 'relative',
        margin: 'auto',
        maxWidth: '1200px'
    },
    iconButton:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        padding: 0,
        borderRadius: 0,
        '& svg':{
            fontSize: '2rem'
        }
    },
    loader:{
        margin: 'auto',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannersBody:{
        position: 'relative',
        width: '100%',
        textAlign: 'center'
    },
    bannerItem:{
        width: '100%'
    }
});
export default useStyles;
