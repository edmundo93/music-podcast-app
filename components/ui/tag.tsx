import React from 'react';
import styles from '@app-styles/components/tag.module.css';
import '@app-styles/utils/mixins.css';

interface IProps {
  value: string | number;
  mode?: 'primary';
}

const Tag = (props: IProps) => {
  return (
    <div className={`${styles.tag} ${props.mode ?? ''}`} data-testid="tag">
      {props.value}
    </div>
  );
};

export default Tag;
