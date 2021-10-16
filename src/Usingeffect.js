import React, { useEffect, useState } from 'react'

function Usingeffect() {
  const [title, setTitle] = useState('')
  const handleTile = () => { setTitle('title change'); }
  
  useEffect(() => {
    console.log('use effect');
    document.title = title;
    return () => {
      setTimeout(() => {
        setTitle("");
        console.log('clean up');
      }, 2000);
      
    }
  },[title])
  return (
    <div>
      <h1>{ title}</h1>
      <button onClick={ handleTile}>change title</button>
    </div>
  )
}

export default Usingeffect
