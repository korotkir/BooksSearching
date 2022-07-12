import './Header.modules.css'
import {useState} from 'react'

const Header = (props) => {



  return (
    <div className="Header">
      <form  className="HeaderForm" action="">

        <div className="HeaderSearch">
          <input value={props.value} onChange={props.onChange} type="text"/>
          <button type="submit" onClick={props.search}>Search</button>
        </div>

        <div className="HeaderSelectGroup">

          <div className="HeaderSelect">
            <span>Categories</span>
            <select name="Type" id="">
              <option value="variable 1">All</option>
              <option value="variable 2">Art</option>
              <option value="variable 3">Biography</option>
              <option value="variable 4">Computers</option>
              <option value="variable 5">History</option>
              <option value="variable 6">Medical</option>
              <option value="variable 7">Poetry</option>
            </select>
          </div>
          <div className="HeaderSelect">
            <span>Sorting By</span>
            <select name="Type" id="">
              <option value="variable 1">Relevance</option>
              <option value="variable 2">Newest</option>
            </select>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Header
