import React from 'react'
import EmptyList from '../../UI/Animations/EmptyList/EmptyList'
import Warning from '../../UI/Animations/Warning/Warning'
import InfoBlock from './InfoBlock/InfoBlock'
import BookList from '../BookList/BookList'
import {useSelector} from 'react-redux'

const Main = () => {
  const data = useSelector(state => state.bookList.booksList)
  const totalItems = useSelector(state => state.bookList.totalItems)

  return (
    <>
      {data && totalItems
        ? <>
            <InfoBlock />
            <BookList />
          </>
        : totalItems === 0 ? <Warning/> : <EmptyList/>}
    </>
  )
}

export default Main
