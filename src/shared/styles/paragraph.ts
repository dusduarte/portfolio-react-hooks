import { makeStyles } from '@material-ui/core';

const useParagraphStyle = makeStyles(() => ({
  root: {
    '& p': {
      margin: '0 0 35px 0',

      '&:last-child': {
        margin: '0'
      }
    }
  }
}));

export default useParagraphStyle;
