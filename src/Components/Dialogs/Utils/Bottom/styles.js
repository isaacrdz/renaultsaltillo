import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bottom: {
    margin: 0,
    paddingTop: '.5rem',
    '& hr': {
      marginTop: '.2rem',
      marginBottom: '.5rem',
      opacity: 0.3
    }
  }
});
export default useStyles;
