import { useContext } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { WeatherContext  } from '@/contexts/WeatherContext';
import CardWeather from './Card/CardWeather';
import { IForescasCity } from '@/interfaces/index';
import { makeStyles, createStyles } from '@mui/styles';
import  useForestcastHook from '../hooks/useForestcastHook';
import Loader from './Loader';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      border: 0,
      marginTop: '20px',
      borderRadius: 8,
      minHeight: 200,
      boxShadow: '0 3px 5px 2px rgb(108 129 189 / 30%)',
      padding: '10px 30px',
      maxWidth: '90%',
      [theme.breakpoints.down('sm')]: {
        padding: '10px',
    },
    },
    title: {
        fontWeight: 600,
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px',
        },
    }
  }));

const DayliForescast = () => {
    const {  city } = useContext(WeatherContext);
    const classes = useStyles();
    const { cityWeather, loader } = useForestcastHook();
    return <Container 
               className={classes.root}      
            >
                <Typography 
                    variant="h5" 
                    component="div"
                    className={classes.title}
                >
                        Daily Forecast {city}
                </Typography>
                <Grid
                    container
                    flexDirection='row'
                    justifyContent="space-around"
                    alignItems="stretch"
                >
                    {loader?<Loader />:
                            cityWeather?.forecast.map((item: IForescasCity)=> {return <CardWeather data={item} key={`${city}${item.date}`}/> })} 
                </Grid>
          </Container>; 
}

export default DayliForescast;

