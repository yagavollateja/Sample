function SearchBar({filterText,inStockOnly,setFilterText,setInStockOnly}) {
    return (
        <form>
        <input type="text" placeholder="Search..." value={filterText} onChange={(e)=>setFilterText(e.target.value)}/>
        <br/>
        <label>
            <input type="checkbox"
            checked={inStockOnly}
            onChange={(e)=>setInStockOnly(e.target.value)}
            />
            {' '}
            Only show products in stock
        </label>
        </form>
    );
}
export default SearchBar