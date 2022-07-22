import {
  SET_BOOKS_LIST, SET_CATEGORY,
  SET_COUNT_ITEMS, SET_LOADING, SET_MORE_BOOKS_LIST,
  SET_SORTING_BY,
  SET_SUCCESS_LOAD,
  SET_TOTAL_ITEMS,
  SET_VALUE
} from './actionType'

const token = process.env.REACT_APP_GOOGLE_TOKEN
const maxResults = 30

export const fetchBookList = () => {
  return (dispatch, getState) => {
    const state = getState()
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.bookList.value}+subject:${state.bookList.category}&startIndex=0&maxResults=${maxResults}&orderBy=${state.bookList.sortingBy}&key=${token}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        dispatch(setBooksList(data.items))
        dispatch(setCountItems(30))
        dispatch(setTotalItems(data.totalItems))
      })
  }
}

export const loadMoreHandler = (evt) => {
  evt.preventDefault()

  return (dispatch, getState) => {
    const state = getState()
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.bookList.value}+subject:${state.bookList.category}&startIndex=${state.bookList.countItems}&maxResults=${maxResults}&orderBy=${state.bookList.sortingBy}&key=${token}`)
      .then((response) => {
        dispatch(setLoading(true))
        return response.json()
      })
      .then((data) => {
        if (!data.items) {
          dispatch(setSuccessLoad(true))
        }
        // dispatch(setBooksList(data.items))
        dispatch(setMoreBooksList(data.items))
        dispatch(setCountItems(maxResults))
        dispatch(setLoading(false))

      })
      .catch(error => console.log(error))
  }
}

export const clear = () => {
  setBooksList(null)
  setCountItems(0)
  setTotalItems(undefined)
  setSuccessLoad(false)
}

export const setValue = (value) => {
  return {
    type: SET_VALUE,
    value: value
  }
}

export const setBooksList = (items) => {
  return {
    type: SET_BOOKS_LIST,
    items: items
  }
}

export const setMoreBooksList = (items) => {
  return {
    type: SET_MORE_BOOKS_LIST,
    items: items
  }
}

export const setCountItems = (num) => {
  return {
    type: SET_COUNT_ITEMS,
    num: num
  }
}

export const setTotalItems = (total) => {
  return {
    type: SET_TOTAL_ITEMS,
    total: total
  }
}

export const setSuccessLoad = (bool) => {
  return {
    type: SET_SUCCESS_LOAD,
    bool: bool
  }
}

export const setSortingBy = (value) => {
  return {
    type: SET_SORTING_BY,
    value: value
  }
}

export const setCategory = (value) => {
  return {
    type: SET_CATEGORY,
    value: value
  }
}

export const setLoading = (bool) => {
  return {
    type: SET_LOADING,
    bool: bool
  }
}


