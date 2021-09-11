import { makeStyles } from '@material-ui/core';

export const useFadeIn = makeStyles(() => ({
  on: {
    opacity: 1,
    transition: '400ms linear'
  },
  off: {
    opacity: 0,
    transition: '400ms linear'
  }
}));

export const useBottomIn = makeStyles(() => ({
  on: {
    bottom: 0,
    transition: '250ms linear'
  },
  off: {
    bottom: '50px',
    transition: '250ms linear'
  }
}));
