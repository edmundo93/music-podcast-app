import React from 'react';
import styles from '@/components/header/header.module.css';

const Header = () => {
  return (
    <div className={styles.header} data-testid="header">
      {'Podcaster'}
    </div>
  );
};

export default Header;
