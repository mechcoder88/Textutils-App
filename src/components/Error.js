import React from 'react'

export default function Error(props) {
  return (
    <div style={{backgroundColor: props.Pmode === 'dark'?'#247b7b':'white',color: props.Pmode === 'dark'?'#1c2e4a':'black'}}>
      <h1><b><i>SORRY !!, Error : 404 Page Not Found!!</i></b></h1>
    </div>
  )
}
