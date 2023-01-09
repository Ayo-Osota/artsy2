import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    LOAD_MORE_PRODUCTS,
    // GET_SINGLE_PRODUCT_BEGIN,
    // GET_SINGLE_PRODUCT_SUCCESS,
    // GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS_BEGIN:
            return { ...state, products_loading: true }

        case GET_PRODUCTS_SUCCESS:
            const { products, featured_products } = action.payload;
            return { ...state, products_loading: false, products, featured_products: featured_products }

        case GET_PRODUCTS_ERROR:
            return { ...state, products_loading: false, products_error: true }

        case LOAD_MORE_PRODUCTS:
            const newPost = 2 * state.post;
            return { ...state, post: newPost }

        // case GET_SINGLE_PRODUCT_BEGIN:
        //     return { ...state, single_product_loading: true, single_product_error: false }

        // case GET_SINGLE_PRODUCT_SUCCESS:
        //     return { ...state, single_product_loading: false, single_product: action.payload }

        // case GET_SINGLE_PRODUCT_ERROR:
        //     return { ...state, single_product_loading: false, single_product_error: true }

        default:
            // return state
            throw new Error(`No Matching "${action.type}" - action type`)
        // break;
    }
}

export default products_reducer
