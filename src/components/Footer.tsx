import React from 'react';
import styles from '../styles/components/footer.module.css';

type Props = {
    className: any
}

const Footer = ( {className}:Props ) => {

    return<div className={className}>
            <div className={styles.container}>
                <div>
                    &copy; 2022 {" "} creado por {" "}
                    <a
                        href="https://diegofly91.github.io/diegolibreros/"
                    // className={aClasses}
                        target="_blank"
                    >
                        Diego Libreros
                    </a>{" "}
                </div>
            </div>
        </div>;
}

export default Footer;