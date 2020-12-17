
import logo from './logo.svg';
import './App.css';
import Filter from './Filter';


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
          <Filter />
        </div>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle theme</button>
        <footer>
        </footer>
      </>
    </ThemeProvider>
    

        
    </div>
  );
}

export default App;
