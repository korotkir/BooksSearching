import './Header.modules.css'

const Header = () => {

  return (
    <div className="Header">
      <form  className="HeaderForm" action="">

        <div className="HeaderSearch">
          <input type="text"/>
          <button type="submit">Search</button>
        </div>

        <div className="HeaderSelectGroup">

          <div className="HeaderSelect">
            <span>Categories</span>
            <select name="Type" id="">
              <option value="variable 1">Type 1</option>
              <option value="variable 2">Type 1</option>
              <option value="variable 3">Type 1</option>
              <option value="variable 4">Type 1</option>
            </select>
          </div>
          <div className="HeaderSelect">
            <span>Sorting By</span>
            <select name="Type" id="">
              <option value="variable 1">Type 1</option>
              <option value="variable 2">Type 1</option>
              <option value="variable 3">Type 1</option>
              <option value="variable 4">Type 1</option>
            </select>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Header
