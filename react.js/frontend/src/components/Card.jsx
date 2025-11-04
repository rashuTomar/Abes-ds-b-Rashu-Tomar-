import React from 'react'
import './Card.css'

function Card({name,edu}) {
  return (
    <center><div id='card'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3kxemJRqG8BsQWQLKBFmxfp4lOrcs9Z9wQ&s" alt=""  width={300} height={200}/>
      <h1>{name}</h1>
      <h1>{edu}</h1>

    </div>
    </center>
  )
}

export default Card
