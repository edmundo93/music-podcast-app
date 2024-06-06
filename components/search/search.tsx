import React from 'react';
import Input from '@app-components/ui/input';
import styles from '@app-components/search/search.module.css';

interface IProps {
  value: string;
  setValue: React.Dispatch<string>;
  placeholder?: string;
}

const Search = (props: IProps) => {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.setValue(event.currentTarget.value);
  };

  return (
    <div className={styles.container} data-testid="search">
      <Input
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Search;
