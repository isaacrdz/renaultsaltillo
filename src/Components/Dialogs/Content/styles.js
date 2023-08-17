import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '1rem',
    minWidth: '280px',
    margin: '1rem'
  },
  content: {
    padding: '0rem',
    overflow: 'hidden'
  }
}));
export default useStyles;
