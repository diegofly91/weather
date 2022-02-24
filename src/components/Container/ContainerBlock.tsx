import { ReactChildren } from 'react';
import { Container } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import clsx from  'clsx';
import { Theme } from '@mui/material/styles';


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      border: 0,
      marginTop: '20px',
      borderRadius: 8,
      minHeight: 200,
      boxShadow: '0 3px 5px 2px rgb(108 129 189 / 30%)',
      padding: '10px 30px',     
      [theme.breakpoints.down('sm')]: {
        padding: '10px',
      },
    }
  }));

  type Props = {
    children: any,
    className?: any
  }


  const ContainerBlock = ({children, className}: Props) => {
    const classes = useStyles();
    return <Container 
                maxWidth="md"
                className={clsx(classes.root, className)}      
            >
                {children}
            </Container>    
  }

  export default ContainerBlock;