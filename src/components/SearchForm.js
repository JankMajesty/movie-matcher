import React from 'react'
import cookie from 'cookie'
import Search from './Search'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

const SearchForm = () => {
    if (!checkAuth()) {
        window.location.replace("/login")
    }
    return (
        <div className="App">
            <Search />
     
        </div>
    );
}

export default SearchForm