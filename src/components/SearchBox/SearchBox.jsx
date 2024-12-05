import css from './SearchBox.module.css'

function SearchBox({ searchName = "", onChange }) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input className={css.searchBox} type="text" value={searchName} onChange={handleChange} />
    </div>
  )
}

export default SearchBox;