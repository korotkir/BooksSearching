import thunk from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import {BookListReducer} from './reducers/BookListReducer'
import {BookReducer} from './reducers/BookReducer'


export const store = configureStore({
  reducer: {
    bookList: BookListReducer,
    book: BookReducer
  },
  middleware: [thunk]
})
