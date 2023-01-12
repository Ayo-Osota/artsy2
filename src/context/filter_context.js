import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  SHOW_CATEGORY_FILTERS,
  SHOW_PRICE_FILTERS,
  SHOW_ARTIST_FILTERS,
  SHOW_YEAR_FILTERS,
  HIDE_CATEGORY_FILTERS,
  HIDE_PRICE_FILTERS,
  HIDE_ARTIST_FILTERS,
  HIDE_YEAR_FILTERS,
  FILTER_PRODUCTS
} from '../actions'
import { useProductsContext } from './products_context'
import { all } from 'axios'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  show_category_filters: true,
  show_price_filters: true,
  show_artist_filters: true,
  show_year_filters: true,
  filters: {
    text: "",
    category: "all",
    min_price: 0,
    max_price: 0,
    price: 0
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateSort = (e) => {
    // const name = e.target.name; // for demostration
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value });
  }

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "price") {
      value = Number(value)
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  }

  const toggleCategoryFilters = () => {
    if (state.show_category_filters) {
      dispatch({ type: HIDE_CATEGORY_FILTERS });
    } else {
      dispatch({ type: SHOW_CATEGORY_FILTERS });
    }
  }

  const togglePriceFilters = () => {
    if (state.show_price_filters) {
      dispatch({ type: HIDE_PRICE_FILTERS });
    } else {
      dispatch({ type: SHOW_PRICE_FILTERS });
    }
  }

  const toggleArtistFilters = () => {
    if (state.show_artist_filters) {
      dispatch({ type: HIDE_ARTIST_FILTERS });
    } else {
      dispatch({ type: SHOW_ARTIST_FILTERS });
    }
  }

  const toggleYearFilters = () => {
    if (state.show_year_filters) {
      dispatch({ type: HIDE_YEAR_FILTERS });
    } else {
      dispatch({ type: SHOW_YEAR_FILTERS });
    }
  }

  useEffect(() => {
    console.log(products);
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters])

  return (
    <FilterContext.Provider value={{
      ...state,
      updateSort,
      toggleCategoryFilters,
      togglePriceFilters,
      toggleArtistFilters,
      toggleYearFilters,
      updateFilters
    }}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
