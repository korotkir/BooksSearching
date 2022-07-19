import React from 'react'
import './Header.modules.css'

const Header = (props) => {

  return (
    <div className="Header">
      <form  className="HeaderForm" action="">

        <div className="HeaderSearch">
          <input value={props.value} onChange={props.inputChange} type="text"/>
          <button type="submit" onClick={props.searchHandler}  to="/">Search</button>
        </div>

        <div className="HeaderSelectGroup">

          <div className="HeaderSelect">
            <label>
              Categories
              <select
                value={props.category}
                onChange={props.categoryChange}
              >
                <option value="">All</option>
                <option value="art">Art</option>
                <option value="biography">Biography</option>
                <option value="computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
              </select>
            </label>
          </div>
          <div className="HeaderSelect">
            <label>
              Sorting by
              <select
                value={props.sortingBy}
                onChange={props.sortingByChange}
              >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
              </select>
            </label>

          </div>
        </div>

      </form>
    </div>
  )
}

export default Header
