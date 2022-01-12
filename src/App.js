import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { app } from './firebase-config';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import FormSignup from './components/common/FormSignup';
import FormLogin from './components/common/FormLogin';
import Home from './components/Home';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');
    if (authToken) {
      navigate('/')
    }
  }, [])

  const onSubmit = (op) => {
    const authentication = getAuth();
    if (op === 'login') {
      signInWithEmailAndPassword(authentication, email, password)
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        })
        .then((response) => {
          navigate('/');
          sessionStorage
            .setItem('Auth Token', response._tokenResponse.refreshToken)
        });
    }
    if (op === 'signup') {
      createUserWithEmailAndPassword(authentication, email, password)
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
        .then((response) => {
          navigate('/');
          sessionStorage
            .setItem('Auth Token', response._tokenResponse.refreshToken)
        });
    }
  }

  return (
    <div className="App">
      <>
        <Container maxWidth="sm"  >
          <Box sx={{ mx: "auto", width: 300,   display: 'flex', justifyContent: 'flex-start' }} >
            <ToastContainer />
            <Routes>
              <Route
                path='/login'
                element={
                  <FormLogin
                    setEmail={setEmail}
                    setPassword={setPassword}
                    onSubmit={() => onSubmit('login')}
                  />
                } />
              <Route
                path='/signup'
                element={
                  <FormSignup
                    setEmail={setEmail}
                    setPassword={setPassword}
                    onSubmit={() => onSubmit('signup')}
                  />
                } />
              <Route path='/' element={
                <Home />
              } />
            </Routes>
          </Box>
        </Container>
      </>
    </div>
  );
}

// <Box
// sx={{
//   display: 'flex',
//   justifyContent: 'flex-start',
// }}>


export default App;
