import React from 'react';
import DarkTheme from './Theme/theme';
import {GlobalStyle} from './Global/GlobalStyle'
import Header from './Components/Header'
import Home from './Page/Home'
import Footer from './Components/Footer'

export default function App() {

  return (
    <>
      <DarkTheme>
          <GlobalStyle />
          <Header />
          <Home />
          <Footer />
      </DarkTheme>
    </>
  );
}
