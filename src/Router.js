import React from 'react'
import { Routes, Route } from 'react-router'
import cookie from 'cookie'
import Login from './components/Login'
import SearchForm from './components/SearchForm'
import SignUp from './components/SignUp'



export const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

const Router = () => {
    return (
        <Routes>
            <Route path="/search" element={<SearchForm/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<SignUp/>} />
        </Routes>
    );
};

export default Router;