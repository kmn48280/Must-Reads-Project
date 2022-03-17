import { createTheme } from '@mui/material/styles';

const themeOptions = 
{
    palette: {
        mode: 'dark',
        type: 'dark',
        primary: {
          main: '#BE0AFF',
        },
        secondary: {
          main: '#168792',
        },
        background: {
          default: '#335c67',
          paper: '#e09f3e',
        },
        error: {
          main: '#ff0203',
          dark: '#9a0404',
        },
        warning: {
          main: '#fff3b0',
        },
        text: {
          primary: '#fbf4f4',
          secondary: 'rgba(7,245,236,0.7)',
        },
        info: {
          main: '#1374bf',
        },
      },
      typography: {
        button: {
          fontFamily: 'Raleway',
          fontSize: '1.1rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
        },
        fontFamily: 'Raleway',
        fontSize: 13,
        htmlFontSize: 21,
        body1: {
          fontFamily: 'Raleway',
        },
      },
      props: {
        MuiAppBar: {
          color: 'secondary',
        },
        MuiTooltip: {
          arrow: true,
        },
      },
    };



const theme = createTheme(themeOptions);

export default theme;