import React, { useState } from 'react'
import { Navigate } from 'react-router'
import Axios from 'axios'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

// class App extends Component {
//   state = {
//     username: '',
//     password: '',
//   }

function App(){

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
   
  const register = () => {
    Axios.post('movie-matcher.c9gwbpwa0mbv.us-east-2.rds.amazonaws.com/signup', {
      username: usernameReg, 
      password: passwordReg
    }).then((response) =>{
      console.log(response);
    });
  }
  // handleTextChange = (e) => {
  //   const state = { ...this.state }
  //   state[e.target.name] = e.target.value
  //   this.setState(state)
  // }
  
  // signup = (e) => {
  //   e.preventDefault()
  //   document.cookie = "loggedIn=true"
  //   window.location.replace("/")
  // }
  
  // render() {
    //   if (this.state.redirectHome) {
      //     return <Navigate to="/" />;
      // }
      return (
        <div className="App">
        <Container maxWidth="sm">
          <form className="container">
            <TextField
              required
              onChange={(e)=> {
                setUsernameReg(e.target.value);
              }}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              onChange={(e)=> {
                setPasswordReg(e.target.value);
              }}
              name="password"
              label="Password"
              type="password" />
            <Button
              onClick={register}
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Sign Up</Button>
          </form>
        </Container>
      </div>
    );
  }


export default App;