import React from 'react';
import styles from '@/components/content/content.module.css';
import SearchSection from '../search-section';

const Content = () => {
  return (
    <div className={styles.content} data-testid="content">
      <SearchSection />
    </div>
  );
};

export default Content;
