import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 5000
  },
  container: {
    alignItems: 'start'
  },
  paper: {
    minWidth: '200px',
    minHeight: '120px',
    margin: '1rem',
    top: '25%'
  },
  title: {
    textAlign: 'center',
    padding: '.5rem'
  },
  box: {
    textAlign: 'center',
    padding: '.5rem'
  }
}));
export default useStyles;
