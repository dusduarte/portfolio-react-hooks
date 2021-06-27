import { makeStyles, Theme } from '@material-ui/core';

const useLoaderStyle = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.common.white,
    display: 'block',
    margin: '0 auto'
  }
}));

export default useLoaderStyle;
