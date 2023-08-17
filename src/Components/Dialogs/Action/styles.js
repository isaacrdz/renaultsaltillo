import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '1rem',
    paddingBottom: '0rem',
    minWidth: '280px',
    maxWidth: '800px',
    margin: '1rem'
  },
  title: {
    padding: '0rem',
    margin: '0rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  content: {
    padding: '0rem',
    margin: '0rem'
  }
}));
export default useStyles;
