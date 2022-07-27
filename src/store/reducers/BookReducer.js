import {SET_BOOK, SET_LOADER} from '../actions/actionType'

const initialState = {
  book: {},
  loader: false
}

export function BookReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOK:
      return {
        ...state,
        book: action.value
      }
    case SET_LOADER:
      return {
        ...state,
        loader: action.bool
      }
    default:
      return state
  }
}
