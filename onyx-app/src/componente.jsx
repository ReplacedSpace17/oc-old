import React, { useState } from 'react'


export default function Component() {
  
  const [text, setText]=useState()
  const [update, setUpdated]=useState()

  const textOnChange = (event) => {
    setText(event.target.value)  
  }

  const buttonClick = () => {
    setUpdated(text)
  }

  return (
    <div>
      <div className='head'>jos</div>
      <input 
        type="text" 
        value={text} 
        onChange={textOnChange} 
      />

      <button 
        onClick={buttonClick}
        className="btn"
      >
        actualizar

      </button>
      <p>texto input: {text}</p>
      <p>Actualizado {update}</p>
    </div>
  )
}
