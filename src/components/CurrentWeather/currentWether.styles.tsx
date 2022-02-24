import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      backgroundImage: 'url(./WeatherImage_MostlyClear-night_1.jpg)',
      backgroundRepeat: 'round',
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      color: 'white',

      [theme.breakpoints.down('sm')]: {
        padding:0
      }
    },
    title: {
        width: '100%',
        backgroundColor: '#00000050',
        padding: '10px',
        color: 'white',
        fontWeight: 600
    },
    left:{
         width: '50%',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         padding: '10px',
         flexDirection: 'column',
         [theme.breakpoints.down('sm')]: {
          width: '100%',
        }
    },
    right:{
      width: '50%',
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      }
    },
    medium: {
      fontSize: 15,
      fontWeight: 500
    },
    large: {
      fontSize: 22,
      fontWeight: 600
    }
  }));


  export default useStyles;