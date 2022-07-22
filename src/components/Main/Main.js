import React from 'react'
import EmptyList from '../../UI/Animations/EmptyList/EmptyList'
import Warning from '../../UI/Animations/Warning/Warning'
import InfoBlock from './InfoBlock/InfoBlock'
import BookList from '../BookList/BookList'

const Main = (props) => {
  const data = props.booksList

  return (
    <>
      {data && props.totalItems
        ? <>
            <InfoBlock
              totalItems={props.totalItems}
            />
            <BookList
              booksList={props.booksList}
              loadMoreHandler={props.loadMoreHandler}
              totalItems={props.totalItems}
              countItems={props.countItems}
              loading={props.loading}
              successLoad={props.successLoad}
              bookHandler={props.bookHandler}
            />
          </>
        : props.totalItems === 0 ? <Warning/> : <EmptyList/>}
    </>
  )
}

export default Main
