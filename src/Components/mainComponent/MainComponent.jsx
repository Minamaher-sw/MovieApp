import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbare  from '../navBar/navBar'
import { Container } from 'react-bootstrap'
import { LangProvider } from '../../context/lang'
import { ThemeProvider } from '../../context/them'
function MainComponent() {
  const [lang, setLang]=useState("en");
  const [theme ,setTheme]=useState("light")
  return (
    <>
    <LangProvider value={{lang, setLang}}>
       <ThemeProvider value={{theme ,setTheme}}>
        <Container  className={theme === 'dark' ? 'bg-dark' : 'bg-light'}>
          <Navbare></Navbare>
          <Outlet></Outlet>
        </Container>
      </ThemeProvider>
    </LangProvider>
  
    </>
  )
}

export default MainComponent
