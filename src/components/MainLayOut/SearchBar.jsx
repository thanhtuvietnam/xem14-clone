import React, { useState, useRef, useReducer, useEffect } from 'react';
import { icons } from '../../shared/icon';
import instance from '../../shared/axiosConfig';
import { RingLoader } from 'react-spinners';

const { IoIosSearch } = icons;

const initialState = {
  keyword: '',
  searchResults: [],
  isLoading: false,
  homeApiResults: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_KEYWORD':
      return { ...state, keyword: action.payload };
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    case 'SET_IS_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_HOME_API_RESULTS':
      return { ...state, homeApiResults: action.payload };
    default:
      return state;
  }
};

const SearchBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  //   const dropdownRef = React.createRef();
  //   console.log(inputRef);

  console.log(state);

  useEffect(() => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    const fetchHomeApi = async () => {
      const HomeApiUrl = `/home`;
      try {
        const homeRes = await instance.get(HomeApiUrl);
        const homeData = await homeRes?.data?.data;
        dispatch({ type: 'SET_HOME_API_RESULTS', payload: homeData });
      } catch (error) {
        console.log(`lỗi ở searchbar fetchHomeApi: ${error}`);
      } finally {
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      }
    };
    fetchHomeApi();
  }, []);

  const totalItemsSearch = state && state?.homeApiResults?.params?.pagination?.totalItems;

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (state.keyword) {
        dispatch({ type: 'SET_IS_LOADING', payload: true });
        const searchApi = `/tim-kiem?keyword=${state?.keyword}`;
        try {
          const response = await instance.get(searchApi);
          const dataSearch = response?.data?.data;
          //   console.log(dataSearch.items);
          dispatch({ type: 'SET_SEARCH_RESULTS', payload: dataSearch });
        } catch (error) {
          console.log(`lỗi khi tìm kiếm: ${error}`);
        } finally {
          dispatch({ type: 'SET_IS_LOADING', payload: false });
        }
      } else {
        dispatch({ type: 'SET_SEARCH_RESULTS', payload: [] });
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [state?.keyword]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    dispatch({ type: 'SET_KEYWORD', payload: e.target.value });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target) && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch({ type: 'SET_KEYWORD', payload: '' });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='search-container sm:w-[300px] md:w-[400px]'>
      <div className=' items-center flex'>
        <input
          ref={inputRef}
          //   data-loading={state?.isLoading}
          className='text-[13px] border-[1px] border-[#162431] truncate rounded-l-md rounded-r-none'
          type='text'
          value={state?.keyword}
          placeholder={`Search with ${totalItemsSearch || 0} movie`}
          onChange={handleChange}
        />
        {state?.isLoading && (
          <div className='loading '>
            <RingLoader
              loading={state?.isLoading}
              color='white'
              size={30}
              speedMultiplier={2}
            />
          </div>
        )}
        <div className='border-[1px] border-[#162431]  p-[5.5px] rounded-r-md'>
          <IoIosSearch
            size={25}
            color='white'
          />
        </div>
      </div>
      <ul
        ref={dropdownRef}
        className='scroll-bar-custom'>
        {state?.searchResults?.items?.map((result, index) => (
          <li key={index}>
            <a href='#'>{result?.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
