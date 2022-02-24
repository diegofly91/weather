import React from 'react';
import Image from 'next/image';
import SelectCity from './Select/SelectCity';
import { createStyles, makeStyles } from '@mui/styles';
import {Typography, Container} from '@mui/material';
import { Theme } from '@mui/material/styles';


const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200',
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontWeight: 600
    }
  }));

type Props = {
    className: any
  }

const Header = ( {className}:Props ) => {
   const classes = useStyles();
  return<div className={className}> 
            <Container className={classes.container} maxWidth='md'>
                   <div className={classes.logo}>
                        <Image 
                              src='/weather-icon.png' 
                              alt="Picture of the author"
                              width={60}
                              height={60}
                        />
                        <Typography  variant="subtitle2" component="div" className={classes.title}>
                          Weather
                        </Typography>
                   </div>
                    <SelectCity />
            </Container>
         </div>;
}

export default Header;