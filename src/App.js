
import logo from './logo.svg';
import './App.css';
import Filter from './Filter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './globalStyle';


function App() {
  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    console.log('xx');
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
}
  

  return (
    <div className="App">
      <header className="App-header">
        Movie Player
      </header>

        <div>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
            <GlobalStyles />
            <button onClick={toggleTheme}>{theme} mode</button>
            <footer>
            </footer>
          </>
        </ThemeProvider>
          <Filter />
          <iframe width="420" height="315" title="movie" src="https://www.youtube.com/embed/re5veV2F7eY">
          </iframe>
          
        </div>
       
    

        
    </div>
  );
}

export default App;
