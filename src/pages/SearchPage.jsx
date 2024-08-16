import React, { useEffect, useState } from 'react';
import { MovieCategory } from '../components/Common';
import { useSearch } from '../context/SearchContext';

const SearchPage = () => {
  const { searchResults, totalItems, keyType} = useSearch();
 
  return (
    <>
      <MovieCategory
        sectionTitle={`Kết quả tìm kiếm cho từ khoá: ${keyType}`}
        dataResults={searchResults}
        totalItemsSearch={totalItems}
        
      />
      
    </>
  );
};

export default SearchPage;
