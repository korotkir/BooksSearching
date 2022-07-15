import React from 'react'
import EmptyList from '../Animations/EmptyList/EmptyList'
import Warning from '../Animations/Warning/Warning'
import InfoBlock from './InfoBlock/InfoBlock'
import BookList from '../BookList/BookList'

const Main = (props) => {
  console.log('Main')
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
            />
          </>
        : props.totalItems === 0 ? <Warning/> : <EmptyList/>}
    </>
  )
}

export default Main
