import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import s from './SearchForm.module.css';

export default function SearchForm({onSubmit}) {
  const [query, setQuery] = useState('');
  
  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      onSubmit(query);
      resetInput();
    } else {
      toast.warn('Enter word into search line!');
    }
  }

  const resetInput = () => {
    setQuery('');
  };
  
  return (
    <>
    <form onSubmit={handleSearch}>
      <input type='text' value={query} onChange={(e)=>setQuery(e.target.value) }/>
    <button type='submit'>Search</button>
    </form>
      <Outlet />
    </>
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func
}