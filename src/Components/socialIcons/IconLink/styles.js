import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    linkIcon:{
        borderRadius: 0,
        padding: '.3rem',
        '& svg':{
            color: props => props.color
        },
        '& label':{
            fontSize: '1rem',
            fontWeight: 700,
            marginLeft: '.3rem'
        }
    }
});
export default useStyles;