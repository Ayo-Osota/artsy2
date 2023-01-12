import searchIcon from "../assets/artsy-icons/search-icon.svg";
import filterIcon from "../assets/artsy-icons/filter-icon.svg";
import { useFilterContext } from "../context/filter_context";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { categories } from "../utils.js/data";
import { useRef } from "react";

const Filters = () => {
    const {
        updateFilters,
        show_category_filters,
        show_price_filters,
        show_artist_filters,
        show_year_filters,
        toggleCategoryFilters,
        togglePriceFilters,
        toggleArtistFilters,
        toggleYearFilters,
        filters: {
            text, max_price, min_price, price
        } } = useFilterContext();

    return (
        <form action="filter" className="filter flex flow" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control__search">
                <img src={searchIcon} alt="search" />
                <input
                    type="text"
                    name="text"
                    placeholder="Search"
                    value={text}
                    onChange={updateFilters}
                />
            </div>
            <div className="filter-heading flex">
                <img src={filterIcon} alt="filter" />
                <h5 className="ff-primary fs-600 text-primary-400 fw-medium">
                    Filter
                </h5>
            </div>
            <div className="underline"></div>
            <button className="filter-btn flex" onClick={toggleCategoryFilters}>
                By category {show_category_filters ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            <div className={show_category_filters ? "form-control__category flow active" : "form-control__category flow"}>
                {categories.map((category) => {
                    return (
                        <label htmlFor={category}>
                            <input type="checkbox" name={category} id={category} />
                            <span className="checkmark"></span>
                            <span>{category}</span>
                        </label>
                    )
                })}
            </div>
            <button className="filter-btn flex" onClick={togglePriceFilters}>
                Price {show_price_filters ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            <div className={show_price_filters ? "form-control flow active" : "form-control flow"}>
                <p className='price'>${min_price} - ${max_price}</p>
                <input
                    type="range"
                    name="price"
                    min={min_price}
                    max={max_price}
                    value={price}
                    onChange={updateFilters}
                />
            </div>
            <button className="filter-btn flex" onClick={toggleArtistFilters}>
                By artist {show_artist_filters ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            <ul className={show_artist_filters ? "form-control flow active" : "form-control flow"} role="list">
                <li>All</li>
                <li>Below $100.00</li>
                <li>$100.00 - $150.00</li>
                <li>$150.00 - $200.00</li>
                <li>Above $200.00</li>
            </ul>
            <button className="filter-btn flex" onClick={toggleYearFilters}>
                Collection year {show_year_filters ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
        </form>
    )
}

export default Filters;