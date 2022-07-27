import {
  SET_BOOKS_LIST, SET_CATEGORY,
  SET_COUNT_ITEMS, SET_LOADING, SET_MORE_BOOKS_LIST,
  SET_SORTING_BY,
  SET_SUCCESS_LOAD,
  SET_TOTAL_ITEMS,
  SET_VALUE
} from '../actions/actionType'
import {createReducer} from '@reduxjs/toolkit'

const initialState = {
  booksList: null,
  value: '',
  sortingBy: 'relevance',
  category: '',
  countItems: 0,
  totalItems: undefined,
  loading: false,
  successLoad: false,
}

export const BookListReducer = createReducer(initialState, builder => {
  builder
    .addCase(SET_VALUE, (state, action) => {state.value = action.value})
    .addCase(SET_BOOKS_LIST, (state, action) => {state.booksList = action.items})
    .addCase(SET_MORE_BOOKS_LIST, (state, action) => {state.booksList.push(...action.items)})
    .addCase(SET_COUNT_ITEMS, (state, action) => {state.countItems += action.num})
    .addCase(SET_TOTAL_ITEMS, (state, action) => {state.totalItems = action.total})
    .addCase(SET_SUCCESS_LOAD, (state, action) => {state.successLoad = action.bool})
    .addCase(SET_SORTING_BY, (state, action) => {state.sortingBy = action.value})
    .addCase(SET_CATEGORY, (state, action) => {state.category = action.value})
    .addCase(SET_LOADING, (state, action) => {state.loading = action.bool})
})
