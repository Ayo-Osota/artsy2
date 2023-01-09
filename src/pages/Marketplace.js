import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductsList from "../components/ProductsList";

const Marketplace = () => {
    return (
        <main className="marketplace container">
            <Filters />
            <div>
                <Sort />
                <ProductsList />
            </div>
        </main>
    )
}

export default Marketplace;