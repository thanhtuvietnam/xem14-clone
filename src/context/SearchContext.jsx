import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSearch, setPageSearch] = useState(1);

  const handlePageChange = (newPage) => {
    setPageSearch(newPage);
  };

  return (
    <SearchContext.Provider 
    value={{ 
      searchResults, 
      setSearchResults, 
      totalItems, 
      setTotalItems, 
      pageSearch, 
      handlePageChange,
    }}
    >
    {children}
    </SearchContext.Provider>
  )
};

export const useSearch = () => {
  return useContext(SearchContext);
};
