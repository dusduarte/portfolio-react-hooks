import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: (props: { backgroundImage: string }) => ({
    width: '100%',
    display: 'block',

    '& div': {
      background: `url(${props.backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '420px',
      backgroundPosition: 'center left',
      backgroundSize: '1500px',

      '@media (max-width:1600px)': {
        backgroundSize: '1200px',
        height: '270px',
      },

      '@media (max-width:1300px)': {
        backgroundSize: '1000px',
        height: '230px',
      },

      '@media (max-width:1100px)': {
        backgroundSize: '800px',
        height: '180px',
      },

      '@media (max-width:800px)': {
        backgroundSize: '900px',
        backgroundPosition: 'center right',
        height: '205px',
      },

      '@media (max-width:680px)': {
        backgroundSize: '750px',
        height: '170px',
      },

      '@media (max-width:580px)': {
        backgroundSize: '650px',
        height: '150px',
      },

      '@media (max-width:520px)': {
        backgroundSize: '900px',
        height: '205px',
      },

      '@media (max-width:470px)': {
        backgroundSize: '770px',
        height: '175px',
      },

      '@media (max-width:410px)': {
        backgroundSize: '660px',
        height: '150px',
      },

      '@media (max-width:380px)': {
        backgroundSize: '600px',
        height: '128px',
      },

      '@media (max-width:340px)': {
        backgroundSize: '570px',
        height: '130px',
      }
    }

  })
}));

export default useStyle;
