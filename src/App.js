import './App.css'
import Main from './components/Main/Main'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Book from './components/Book/Book'
import Layout from './components/Layout/Layout'
import {useDispatch, useSelector} from 'react-redux'
import {
  clear,
  fetchBookList,
  loadMoreHandler,
  setCategory,
  setSortingBy,
  setValue
} from './store/actions/BookListActions'

function App() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const value = useSelector(state => state.bookList.value)
  const sortingBy = useSelector(state => state.bookList.sortingBy)
  const category = useSelector(state => state.bookList.category)
  const booksList = useSelector(state => state.bookList.booksList)
  const totalItems = useSelector(state => state.bookList.totalItems)
  const countItems = useSelector(state => state.bookList.countItems)
  const loading = useSelector(state => state.bookList.loading)
  const successLoad = useSelector(state => state.bookList.successLoad)

  // Оставим функцию, так как UI
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
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                searchHandler={searchHandler}
                value={value}
                inputChange={inputChange}
                sortingBy={sortingBy}
                sortingByChange={sortingByChange}
                category={category}
                categoryChange={categoryChange}
              />
            }>
            <Route
              index
              exact
              element={
                <Main
                  booksList={booksList}
                  loadMoreHandler={(evt) => dispatch(loadMoreHandler(evt))}
                  totalItems={totalItems}
                  countItems={countItems}
                  loading={loading}
                  successLoad={successLoad}
                />
              }
            />
            <Route
              path="id/:bookId"
              exact
              element={
                <Book />
              }
            />
          </Route>
        </Routes>
  )
}

export default App
