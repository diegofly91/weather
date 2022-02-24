import * as React from 'react';
import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { IForescasCity } from '@/interfaces/index';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { createStyles, makeStyles } from '@mui/styles';

type Props = {
    data: IForescasCity
  }


const CardWeather = ({data}: Props) => { 
    const { icon_url, date, min_temp_c, max_temp_c, condition, sunset, sunrise } = data;
    const classes = useStyles()
    return<Box
            className={classes.root}
          >
                    <Typography variant="subtitle1" component="div" align="center" className={classes.title}>
                      {date}
                    </Typography>
                    <Typography variant="h5" component="div" align="center">
                      {max_temp_c}°
                    </Typography>
                    <Typography textAlign='center' variant="body1" component="span">
                      {min_temp_c}°
                    </Typography>
                    <Avatar 
                      src={icon_url}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Typography variant="subtitle2" component="div" align="center">
                      {condition}
                    </Typography>
                    <div>
                       <LightModeIcon 
                         htmlColor='#feb32f'
                       /> {sunrise}
                    </div>
                    <div>
                      <ModeNightIcon 
                        htmlColor="#2c8fe9"
                      /> {sunset}
                    </div>
          </Box>
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
      width: 160,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRight: 'solid 1px #00000020',
      padding: '10px',
      borderRadius: 6,
      marginBottom: theme.spacing(2),
      boxShadow: '0 3px 5px 2px rgb(108 129 189 / 15%)',
      '&:hover': {
        backgroundColor: '#00000005',
        opacity: [0.9, 0.8, 0.7],
        cursor: 'pointer'

      },
      '&  div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        padding: '3px'
     },
      [theme.breakpoints.down('sm')]: {
        width: '45%',
      },
    },
    title: {
        fontWeight: 600,
        marginBottom: '8px'
    }
  }));

export default CardWeather;