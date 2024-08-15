import React, { useEffect, useState } from 'react';
import { MovieCategory } from '../components/Common';
import { useSearch } from '../context/SearchContext';

const SearchPage = () => {
  const { searchResults, totalItems } = useSearch();

  return (
    <>
      <MovieCategory
        sectionTitle='Kết quả tìm kiếm'
        dataResults={searchResults}
        totalItemsSearch={totalItems}
      />
    </>
  );
};

export default SearchPage;
