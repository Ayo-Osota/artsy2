import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  SHOW_CATEGORY_FILTERS,
  SHOW_PRICE_FILTERS,
  SHOW_ARTIST_FILTERS,
  SHOW_YEAR_FILTERS,
  HIDE_CATEGORY_FILTERS,
  HIDE_PRICE_FILTERS,
  HIDE_ARTIST_FILTERS,
  HIDE_YEAR_FILTERS
} from '../actions'

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price.usd)
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice
        }
      }

    case UPDATE_SORT:
      return { ...state, sort: action.payload }

    case SORT_PRODUCTS:
      const { filtered_products, sort } = state;
      let tempProducts = [...filtered_products];

      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) =>
          a.price - b.price
        )
      }

      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.price - a.price
        })
      }

      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }

      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }

      return { ...state, filtered_products: tempProducts }

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } }

    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, price } = state.filters;
      let filteredProducts = [...all_products];

      if (text) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        })
      }

      filteredProducts = filteredProducts.filter((product) => {
        return product.price.usd <= price
      })

      return { ...state, filtered_products: filteredProducts }

    case SHOW_CATEGORY_FILTERS:
      return { ...state, show_category_filters: true }

    case HIDE_CATEGORY_FILTERS:
      return { ...state, show_category_filters: false }

    case SHOW_PRICE_FILTERS:
      return { ...state, show_price_filters: true }

    case HIDE_PRICE_FILTERS:
      return { ...state, show_price_filters: false }

    case SHOW_ARTIST_FILTERS:
      return { ...state, show_artist_filters: true }

    case HIDE_ARTIST_FILTERS:
      return { ...state, show_artist_filters: false }

    case SHOW_YEAR_FILTERS:
      return { ...state, show_year_filters: true }

    case HIDE_YEAR_FILTERS:
      return { ...state, show_year_filters: false }

    default:
      // break;
      // return state
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default filter_reducer;
