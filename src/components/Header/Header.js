import React from 'react'
import './Header.modules.css'
import {useDispatch, useSelector} from 'react-redux'
import {clear, fetchBookList, setCategory, setSortingBy, setValue} from '../../store/actions/BookListActions'
import {useNavigate} from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const value = useSelector(state => state.bookList.value)
  const sortingBy = useSelector(state => state.bookList.sortingBy)
  const category = useSelector(state => state.bookList.category)

  const inputChange = (evt) => {
    dispatch(setValue(evt.target.value))
  }

  const searchHandler = (evt) => {
    dispatch(() => clear())
    evt.preventDefault()
    navigate('/')
    dispatch(fetchBookList())
  }

  const sortingByChange = (evt) => {
    dispatch(setSortingBy(evt.target.value))
  }

  const categoryChange = (evt) => {
    dispatch(setCategory(evt.target.value))
  }

  return (
    <div className="Header">
      <form  className="HeaderForm" action="">

        <div className="HeaderSearch">
          <input value={value} onChange={inputChange} type="text"/>
          <button type="submit" onClick={searchHandler}  to="/">Search</button>
        </div>

        <div className="HeaderSelectGroup">

          <div className="HeaderSelect">
            <label>
              Categories
              <select
                value={category}
                onChange={categoryChange}
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
                value={sortingBy}
                onChange={sortingByChange}
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
