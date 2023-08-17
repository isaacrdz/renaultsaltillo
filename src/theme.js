import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          "*, *::before, *::after": {
            boxSizing: "content-box",
          },
          body: {
            backgroundColor: '#FFF',
          },
        },
      },
      MuiFormControl: {
        root: {
          width: '100%',
          marginBottom: '10px'
        }
      }
    },
})

export default theme;