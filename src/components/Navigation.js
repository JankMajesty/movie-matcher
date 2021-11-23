import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { checkAuth } from '../Router';

const Navigation = () => {
    return checkAuth() ? (
        <AppBar position="relative" style={{ background: '#3EB371' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                   <Link to="/"> Movie Matcher </Link>
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }}>
                      <Link to ="/login">Logout</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    ) : (
        <AppBar position="relative" style={{ background: '#3EB371' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                <Link to="/"> Movie Matcher </Link>
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                    <Link to ="/login">Login</Link>
                    </li>
                    <li>
                    <Link to ="/signup">Sign Up</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
