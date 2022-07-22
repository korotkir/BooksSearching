import {
  SET_BOOKS_LIST, SET_CATEGORY,
  SET_COUNT_ITEMS, SET_LOADING, SET_MORE_BOOKS_LIST,
  SET_SORTING_BY,
  SET_SUCCESS_LOAD,
  SET_TOTAL_ITEMS,
  SET_VALUE
} from '../actions/actionType'

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

export function BookListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.value
      }
    case SET_BOOKS_LIST:
      return {
        ...state,
        booksList: action.items
      }
    case SET_MORE_BOOKS_LIST:
      return {
        ...state,
        booksList: [...state.booksList, ...action.items]
      }
    case SET_COUNT_ITEMS:
      return {
        ...state,
        countItems: state.countItems + action.num
      }
    case SET_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.total
      }
    case SET_SUCCESS_LOAD:
      return {
        ...state,
        successLoad: action.bool
      }
    case SET_SORTING_BY:
      return {
        ...state,
        sortingBy: action.value
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.value
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.bool
      }
    default:
      return state
  }
}
