import './App.css';
import About from './components/About';
import About2 from './components/About2';
import Alert from './components/Alert';
import Contact from './components/Contact';
import Error from './components/Error';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';


import {
  BrowserRouter as Main,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light") // Determines Whether Dark mode is Enabled or Not ?

  // ********** Different Color Palettes Code Start **********
  function removeBgClasses() {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    // Removing the existing background class 
    removeBgClasses();

    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled", "success");

      // Changing Title Dynamically for Dark Mode
      document.title = "Textutils - Home (Dark Mode)";

    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");

      // Changing Title Dynamically for Light Mode
      document.title = "Textutils - Home (Light Mode)";
    }
  }
  // ********** Different Color Palettes Code End **********

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      typeof: type
    });

    // Code for Auto-Dismissing of Alert
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <>
      <Main>
        <Navbar title="TextUtils Org" aboutText="About TextUtils" aboutText2="More About Us" contact="Contact Us" changeTheme={toggleMode} theme={mode} />
        <Alert alertText={alert} />
        <Routes>
          <Route exact path="/" element={
            <TextForm heading="!!..Play with Your Text with TextUtils..!!" theme={mode} textFormAlert={showAlert} />
          } />
          <Route exact path="/about" element={
            <About />
          } />
          <Route exact path="/about2" element={
            <About2 Pmode={mode} />
          } />
          <Route exact path="/contact" element={
            <Contact Pmode={mode} />
          } />
          <Route path="/*" element={
            <Error Pmode={mode} />
          } />
        </Routes>
      </Main>
    </>
  );
}

export default App;