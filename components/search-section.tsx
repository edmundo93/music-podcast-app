'use client';

import React, { useState } from 'react';
import '@app-styles/layout.css';
import Tag from '@app-components/ui/tag';
import Search from '@app-components/search/search';

const SearchSection = () => {
  const [search, setSearch] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [numResults, setNumResults] = useState<number>(0);

  return (
    <div className="row row-aligned-end all-width">
      <Tag value={numResults} mode="primary" />
      <Search
        value={search}
        setValue={setSearch}
        placeholder={'Filter podcasts...'}
      />
    </div>
  );
};

export default SearchSection;
