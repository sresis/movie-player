
import logo from './logo.svg';
import './App.css';
import Filter from './Filter';
import ShowVideo from './showVideo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './globalStyle';

function Homepage() {

  return (

    <div>
    <Filter />
    
    </div>

  )


}
function App(props) {
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
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>{theme} mode</button>
        <footer>
        </footer>
      </>
    </ThemeProvider>
    <Router>
    <Switch>
      <Route path="/filter" component={Filter} />
      <Route path="/show-video/:id" component={ShowVideo} />
      <Route path="/" exact component={Homepage} />
      <Redirect to='/' />
    </Switch>


    </Router>
    

        
    

        
    </div>
  );
}

export default App;
