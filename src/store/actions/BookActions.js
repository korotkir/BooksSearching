import {SET_BOOK, SET_LOADER} from './actionType'

export const fetchBook = (bookId) => {
  return dispatch => {
    dispatch(setLoader(true))
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const cover = Object.values(data.volumeInfo.imageLinks)[3] ? Object.values(data.volumeInfo.imageLinks)[3] : Object.values(data.volumeInfo.imageLinks)[0]
        const category = data.volumeInfo.categories ? data.volumeInfo.categories[0] : 'n/a'
        const title = data.volumeInfo.title
        const author = Array.isArray(data.volumeInfo.authors) ? data.volumeInfo.authors.join(', ') : data.volumeInfo.authors || 'Author unknown'
        const descHTML = data.volumeInfo.description ? data.volumeInfo.description : 'Description is not found'

        dispatch(setBook({ cover, category, title, author, descHTML }))

        setTimeout(() => {
          dispatch(setLoader(false))
        }, 1000)
      })
  }
}

export const setBook = (value) => {
  return {
    type: SET_BOOK,
    value
  }
}

export const setLoader = (bool) => {
  return {
    type: SET_LOADER,
    bool
  }
}
