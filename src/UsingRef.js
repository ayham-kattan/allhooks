import React, { useEffect, useRef } from 'react'

function UsingRef() {
  
  const amountRef = useRef();
  useEffect(() => {
   amountRef.current.focus()
  } )
  return (
    <div>
      <input ref={amountRef} />
      
    </div>
  )
}

export default UsingRef
