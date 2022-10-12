import React from 'react';
import {GlobalStyle} from './Global/GlobalStyle'
import Header from './Components/Header'
import Home from './Page/Home'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </>
  );
}
