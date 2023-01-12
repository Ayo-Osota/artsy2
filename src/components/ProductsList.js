import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import Product from "./Product";

const ProductsList = () => {
    const {filtered_products: products} = useFilterContext();
    const { post, loadMore } = useProductsContext();
    
    return (
        <section className="products-list-wrapper">
            <div className="products-list">
                {products.slice(0, post).map((product) => {
                    const { id, name, price, url } = product
                    return <Product key={id} name={name} price={price.usd} imageUrl={url} />
                })}
            </div>
            {post < products.length && <button
                type="button"
                className="button load-more__btn"
                data-type="inverted"
                onClick={loadMore}
                >
                See more
            </button>}
        </section>
    )
}

export default ProductsList;