import React from 'react'
import "./searchinput.css"
const SearchInput = ({handleChange}) => {
  return (
    <div className='search-container'>
      <input className='search' type="text" placeholder="Search" onChange={handleChange}/>
    </div>
  )
}

export default SearchInput