import React from 'react'
import img from "../assets/icons8-search-24.png"
import "./Search.css"

const Search = () => {
  return (
    <div className='search'>
        <img src={img} alt=""  />
        <input type="text" />
    </div>
  )
}

export default Search