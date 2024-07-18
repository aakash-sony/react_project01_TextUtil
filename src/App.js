import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   createBrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [modeText, setModeText] = useState('Enable Dark Mode');

  const changeModeText = () => {
    if (modeText === 'light') {
      setModeText('Disable Dark Mode');
    }
    else {
      setModeText('Enable Dark Mode');
    }
  }

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      changeModeText();
      document.body.style.backgroundColor = '#3d3e5a';
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my - 3">
        {/* <Switch>
            <Route path='/about'> */}
        {/* <About /> */}
        {/* </Route>
            <Route path="/"> */}
        <TextForm heading="Enter The text to analyze" />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
