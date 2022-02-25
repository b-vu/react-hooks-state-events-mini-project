function CategoryFilter({categories, filterCategory, onFilterButtonClick}) {
  const handleClick = event => {
    onFilterButtonClick(event.target.textContent);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {
        categories.map(category => {
          return <button key={category} onClick={handleClick} className={filterCategory === category ? "selected" : null}>{category}</button>
        })
      }
    </div>
  );
}

export default CategoryFilter;
