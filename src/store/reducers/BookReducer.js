import {SET_BOOK, SET_LOADER} from '../actions/actionType'
import {createReducer} from '@reduxjs/toolkit'

const initialState = {
  book: {},
  loader: false,
}

export const BookReducer = createReducer(initialState, builder => {
  builder
    .addCase(SET_BOOK, (state, action) => {state.book = action.value})
    .addCase(SET_LOADER, (state, action) => {state.loader = action.bool})
})
