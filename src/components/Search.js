import React from 'react'

const Search = props => {
  console.log(props)
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.search} onChange={(e)=>(props.changer(e))}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
