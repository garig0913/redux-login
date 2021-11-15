import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login'
import Profile from './components/profile/Profile';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
