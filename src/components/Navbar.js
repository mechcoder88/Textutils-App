import React from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
      
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about2">{props.aboutText2}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">{props.contact}</Link>
          </li>
        </ul>

        {/* Dark Mode Switch Code */}
        <div className={`custom-control custom-switch text-${props.theme === 'light' ? 'dark' : 'light'}`}>
          <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={() => { props.changeTheme('null') }} />
          <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
        </div>

        {/* ********** Different Color Palettes Code Start ********** */}
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={() => { props.changeTheme('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-danger rounded mx-2" onClick={() => { props.changeTheme('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-success rounded mx-2" onClick={() => { props.changeTheme('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-warning rounded mx-2" onClick={() => { props.changeTheme('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-dark rounded mx-2" onClick={() => { props.changeTheme('dark') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-light rounded mx-2" onClick={() => { props.changeTheme('light') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
        </div>
      </div>
    </nav>
  )
}
// ** PropTypes
// PropTypes can be array, bool, func, number, object, string, symbol

// By using curly brackets we're actually passing an object
// ** Setting PropTypes for Navbar Components Props
// Navbar.PropTypes = {title: PropTypes.string, aboutText: PropTypes.string} ==>> It'll set the [Navbar's title prop's & aboutText prop's] PropType as String 
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};

// ** Setting defaultProps : Provides default values to the "props" if user doesn't define any.
Navbar.defaultProps = { title: "Set Title Here", aboutText: "About Text Here", contact: "Contact Details Here" };

// ** "isRequired" PropType : Used for the "props" whose values must be defined.
Navbar.propTypes = { contact: PropTypes.string.isRequired };

// ? Important Points
// Here "props" is like an object with its own properties(variables) which we're exporting to "components" by passing it as an argument in the function.
// Here "prop" is the object and "prop.title", "prop.aboutText" are its properties(variables)
// Since it is a JavaScript Object, so its properties are written inside the curly brackets "{}" in the HTML code.

// ! Here in this BootStrap Code, following changes are done :
// (1.) A '/' has been included in the Non-Closing Tags at their end in their code.
// (2.) "class" has been replaced by "className".
// (3.) ' href="/" ' has been replaced by ' href="/" '