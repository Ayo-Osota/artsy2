import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS
  } from '../actions'
  
  const filter_reducer = (state, action) => {
    switch (action.type) {
      case LOAD_PRODUCTS:
        let maxPrice = action.payload.map((product) => product.price)
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
        return { ...state, filters: { ...state.filters, [action.payload.name]: action.payload.value } }
  
      case FILTER_PRODUCTS:
        const {all_products} = state;
        const {name, price} = state.filters;
        let filteredProducts = [...all_products];
  
        if(name) {
          filteredProducts = filteredProducts.filter((product) => {
            return product.name.toLowerCase().startsWith(name);
          })
        }
  
        filteredProducts = filteredProducts.filter((product) => {
          return product.price <= price
        })
  
        return { ...state, filtered_products: filteredProducts }
      // break;
  
      default:
        // break;
        // return state
        throw new Error(`No Matching "${action.type}" - action type`)
    }
  }
  
  export default filter_reducer
  