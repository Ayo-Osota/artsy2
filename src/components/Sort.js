import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";

const Sort = () => {
    const {
        filtered_products: products, sort, updateSort
    } = useFilterContext();
    const { post } = useProductsContext();

    return (
        <div className="sort-wrapper flex">
            {products.length < 0 ? <h6>No results available</h6> :
            post < products.length ? <h6>See 1 to {post} of {products.length} results</h6> :
            products.length < 2 ? <h6>{products.length} result available</h6> :
            <h6>{products.length} results available</h6>}
            <form>
                <label htmlFor="sort">Sort by</label>
                <select name="sort" id="sort" className='sort-input' value={sort} onChange={updateSort}>
                    <option value="Sort by">Sort by</option>
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a-z)</option>
                    <option value="name-z">name (z-a)</option>
                </select>
            </form>
        </div>
    )
}

export default Sort;