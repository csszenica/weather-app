import React from 'react'

const SearchBar = ({setSearchTerm, searchCity, getMyLocation}) => {
  return (
    <div>
        <input onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={searchCity}>Search</button>
        <button onClick={getMyLocation}>Get my location</button>

    </div>
  )
}

export default SearchBar