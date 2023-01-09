import searchIcon from "../assets/artsy-icons/search-icon.svg";
import { useFilterContext } from "../context/filter_context";
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";

const Filters = () => {
    const {
        products, updateFilters, filters: {
            name, max_price, min_price, price
        } } = useFilterContext();

    return (
        <form action="filter" className="filter flex flow" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control__search">
                <img src={searchIcon} alt="search" />
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={name}
                    onChange={updateFilters}
                />
            </div>
            <h5 className="ff-primary fs-600 text-primary-400 fw-medium">Filter</h5>
            <div className="underline"></div>
            <div>
                <button className="filter-btn">By category <MdKeyboardArrowDown/> </button>
                <div className="form-control__category flow">
                    <label htmlFor="editorials">
                        <input type="checkbox" name="Editorials" id="editorials" />
                        <span className="checkmark"></span>
                        <span>Editorials</span> 
                    </label>
                    <label htmlFor="fashion">
                        <input type="checkbox" name="Fashion" id="fashion" />
                        <span className="checkmark"></span>
                        <span>Fashion</span> 
                    </label>
                    <label htmlFor="optics">
                        <input type="checkbox" name="Optics" id="optics" />
                        <span className="checkmark"></span>
                        <span>Optics</span> 
                    </label>
                    <label htmlFor="art">
                        <input type="checkbox" name="Art" id="art" />
                        <span className="checkmark"></span>
                        <span>Art & Museum</span> 
                    </label>
                    <label htmlFor="nature">
                        <input type="checkbox" name="Nature" id="nature" />
                        <span className="checkmark"></span>
                        <span>Nature</span> 
                    </label>
                </div>
            </div>
            <div className="form-control">
                <h5>Price</h5>
                <p className='price'>{price}</p>
                <input
                    type="range"
                    name="price"
                    min={min_price}
                    max={max_price}
                    value={price}
                    onChange={updateFilters}
                />
            </div>
            <div>
                <p>By artist</p>
                <ul role="list">
                    <li>All</li>
                    <li>Below $100.00</li>
                    <li>$100.00 - $150.00</li>
                    <li>$150.00 - $200.00</li>
                    <li>Above $200.00</li>
                </ul>
            </div>
            <div>
                <p>Collection year</p>
            </div>
            <div>
                <div>
                    <p>
                        See 1-6 of 15 results
                    </p>
                    <select name="fav">
                        <option value="Aaron Ramsdale">Sort by</option>
                        <option value="Alex Zinchenko">Alex Zinchenko</option>
                        <option value="Gabriel Malgalhaes">Gabriel Malgalhaes</option>
                        <option value="William Saliba">William Saliba</option>
                        <option value="Ben White">Ben White</option>
                        <option value="Granit Xhaka">Granit Xhaka</option>
                        <option value="Thomas Partey">Thomas Partey</option>
                        <option value="Gabriel Martinelli">Gabriel Martinelli</option>
                        <option value="Bukayo Saka">Bukayo Saka</option>
                        <option value="Martin Odegaard">Martin Odegaard</option>
                        <option value="Gabriel Jesus">Gabriel Jesus</option>
                    </select>
                </div>
                <div className="flex cards">
                    <div>
                        <div>
                        </div>
                        <p>PHILOMENA '22</p>
                        <p>$3.90</p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Filters;