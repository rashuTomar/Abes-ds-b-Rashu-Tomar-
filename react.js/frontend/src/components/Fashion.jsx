import React from 'react'
import "./fashion.css"

const Fashion = ({props}) => {
  return (
    <div id='card'>
        <img src={props.image} alt="" height={100} width={80}/>
        <h3>Title:{props.title}</h3>
        <h3>Price:{props.price}</h3>
    </div>
  )
}

export default Fashion