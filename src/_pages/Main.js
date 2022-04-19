import React from 'react';
import { Navigate, Routes, Route, } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Theme from '../components/Theme'


//메인페이지
function Main(props) {
  const userName = sessionStorage.getItem('userName');
  return (
    <article>
      <div>
        {userName? userName : "모험가"}님! 네티아 세계에서 무엇을 하고 싶으세요?
      </div>
    </article>
  );
};

export default Main;
