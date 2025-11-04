import React,{useState} from 'react'
import './Count1.css' ;

function Count1() {
    const [count,setCount]=useState(0) ;    
    function increment()
    {
        setCount(count+1) ;
    }
    function decrement()
    {
        setCount(count-1) ;
    }
  return (
    <div>
      <button onClick={increment} class='btn'>+</button>
      <span>{count}</span>
      <button onClick={decrement} class='btn'>-</button>
    </div>
  )
}

export default Count1
