import { useContext } from 'react';
import { Typography, Grid } from '@mui/material';
import { WeatherContext  } from '@/contexts/WeatherContext';
import CardWeather from './Card/CardWeather';
import { IForescasCity } from '@/interfaces/index';
import { makeStyles, createStyles } from '@mui/styles';
import  useForestcastHook from '../hooks/useForestcastHook';
import Loader from './Loader';
import ContainerBlock from '@/components/Container/ContainerBlock';
import RowRadioDays from './RowRadio/RowRadioDays';

const useStyles = makeStyles((theme: Theme) => createStyles({
    containerOpc : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    title: {
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px',
        },
    }
  }));

const DayliForescast = () => {
    const {  city } = useContext(WeatherContext);
    const classes = useStyles();
    const { cityWeather, loader } = useForestcastHook();
    return <ContainerBlock>
                <div className={classes.containerOpc}>
                    <Typography 
                        variant="h5" 
                        component="div"
                        className={classes.title}
                    >
                            Daily Forecast
                    </Typography>
                    <RowRadioDays />
                </div>
                <Grid
                    container
                    flexDirection='row'
                    justifyContent="space-around"
                    alignItems="stretch"
                >
                    {loader?<Loader />:
                            cityWeather?.forecast.map((item: IForescasCity)=> {return <CardWeather data={item} key={`${city}${item.date}`}/> })} 
                </Grid>
           </ContainerBlock>; 
}

export default DayliForescast;

