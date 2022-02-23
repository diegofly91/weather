import React from 'react';
import styles from '../styles/components/header.module.css';
import Image from 'next/image';

type Props = {
    className: any
  }

const Header = ( {className}:Props ) => {

    return<div className={className}> 
            <div className={styles.container}>
                <Image 
                      src='/weather-icon.png' 
                      alt="Picture of the author"
                      width={60}
                      height={60}
                />
                <h3>Weather</h3>
            </div>
         </div>;
}

export default Header;