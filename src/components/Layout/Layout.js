import Header from '../Header/Header'
import {Outlet} from 'react-router-dom'

const Layout = props => {
  return (
    <>
      <Header
        searchHandler={props.searchHandler}
        value={props.value}
        inputChange={props.inputChange}
        sortingBy={props.sortingBy}
        sortingByChange={props.sortingByChange}
        category={props.category}
        categoryChange={props.categoryChange}
      />
      <Outlet />
    </>
  )
}

export default Layout
