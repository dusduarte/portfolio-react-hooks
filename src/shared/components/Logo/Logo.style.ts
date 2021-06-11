import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    maxWidth: '92px',
    '& > label': {
      fontSize: '10pt',
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '5px',
    },
  },
  containerDev: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& div': {
      background: theme.palette.secondary.main,
      display: 'flex',
      alignItems: 'center',
      width: '50px',
      padding: '2px 5px',
      justifyContent: 'flex-end',
      '& label': {
        fontSize: '14pt',
      },
    },
  },
}));

export default useStyle;
