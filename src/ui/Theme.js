import { createMuiTheme } from '@material-ui/core/styles';

const miaRed = '#7D2F20';
const miaOrange = '#FF9782';
const miaGrey = '#F7F5F5';
const miaGrey2 = '#716E6E';

export default createMuiTheme({
  palette: {
    common: {
      red: `${miaRed}`,
      orange: `${miaOrange}`,
      orange2: '#F6B055',
      orange3: '#FFD7CF',

    },
    primary: {
      main: `${miaGrey}`,
    },
    secondary: {
      main: `${miaOrange}`,
    },
    frame: {
      main: 'white',
    },
  },
  typography: {
    tab: {
      textTransform: 'none',
      fontWeight: 700,
      color: 'black',
      fontSize: '1rem',
    },
    estimate: {

      fontWeight: 'bold',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'black',
    },
    h1: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: 'black',
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: '2.75rem',
      color: 'white',
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: '2.5rem',
      color: miaGrey,
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: '1.75rem',
      color: miaRed,
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '1.25rem',
      color: 'black',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: 'white',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'black',
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    body1: {
      fontFamily: 'Roboto',
      fontSize: '1.25rem',
      color: 'black',
      fontWeight: 300,
    },
    body2: {
      fontFamily: 'Roboto',
      fontSize: '1.25rem',
      color: 'black',
      fontWeight: 400,
    },
    caption: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      fontWeight: 500,
      color: miaGrey2,
    },
    learnButton: {
      fontFamily: 'Roboto',
      borderColor: 'black',
      borderWidth: 2,
      textTransform: 'none',
      color: miaGrey,
      borderRadius: 50,
      fontWeight: 'bold',
    },
    contactButton: {
      fontFamily: 'Roboto',
      borderColor: miaGrey,
      borderWidth: 2,
      textTransform: 'none',
      color: miaGrey,
      borderRadius: 50,
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: miaGrey2,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: 'black',
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${miaOrange}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${miaOrange}`,
        },
      },
    },
  },
});
