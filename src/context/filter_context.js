import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS
} from '../actions'
import { useProductsContext } from './products_context'
import { all } from 'axios'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    name: "",
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
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort, state.filters])

  return (
    <FilterContext.Provider value={{
      ...state,
      updateSort,
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
