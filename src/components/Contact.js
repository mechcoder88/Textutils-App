import React from 'react'

export default function Contact(props) {
  return (
    <div className="container" style={{backgroundColor: props.Pmode === 'dark'?'#247b7b':'white',color: props.Pmode === 'dark'?'#1c2e4a':'black'}}>
        <h3 className="container" >Please Contact Us</h3><br/>
        <div className="container">
            E-mail : <b>customersupport@textutils.com</b><br/>
            Ph No : <b>+91 9876543210</b>
        </div>
    </div>
  )
}
