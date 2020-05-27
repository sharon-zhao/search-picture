import React from 'react'
import { SearchIcon } from '../shared/AppIcons'

const SearchForm = () => (
  <form className="form-horizontal">
    <input
      placeholder="Search"
      type="text"
      name="searchString"
      required
    />
    <button type="submit">
      <SearchIcon
        height="2rem"
        width="2rem"
      />
    </button>
  </form>
)

export default SearchForm
