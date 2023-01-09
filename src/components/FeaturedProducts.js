import { useProductsContext } from "../context/products_context";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
    const { featured_products, products_loading, products_error } = useProductsContext();

    if (products_loading) {
        return <h2>Loading...</h2>
    }

    if (products_error) {
        return <h2>Error</h2>
    }

    return (
        <section className="features container">
            <h2 className="ff-primary text-grey-300 fw-medium fs-secondary-heading">
                Featured products
            </h2>
            <div className="even-columns">
                {featured_products.map((product) => {
                    const { id, url } = product;
                    return (
                        <FeaturedProduct key={id} imageUrl={url} />
                    )
                })}
            </div>
        </section>
    )
}

export default FeaturedProducts;