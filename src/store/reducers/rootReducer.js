import {combineReducers} from 'redux'
import {BookListReducer} from './BookListReducer'
import {BookReducer} from './BookReducer'

export default combineReducers({bookList: BookListReducer, book: BookReducer})
