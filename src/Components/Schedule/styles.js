import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=> ({
    schedule:{
        display: 'flex',
        alignItems: 'center',
        padding: '.5rem'
    },
    icon:{
        color: '#6bb847',
        width: '30px',
        height: '30px',
        marginRight: '.5rem'
    },
    times:{
        '& p':{
            margin: 0,
            color: '#888',
            fontWeight: 600
        }
    }
}));

export default useStyles;