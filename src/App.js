import './App.css'
import Main from './components/Main/Main'
import {Route, Routes} from 'react-router-dom'
import Book from './components/Book/Book'
import Layout from './components/Layout/Layout'

function App() {
  return (
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index exact element={ <Main /> } />
            <Route path="id/:bookId" exact element={ <Book />}
            />
          </Route>
        </Routes>
  )
}

export default App
