import React from 'react';
import styles from '../styles/components/footer.module.css';

type Props = {
    className: any
}

const Footer = ( {className}:Props ) => {

    return<div className={className}>
            <div className={styles.container}>
                <div>
                    &copy; 2022 {" "}  Diego Libreros
                </div>
            </div>
        </div>;
}

export default Footer;