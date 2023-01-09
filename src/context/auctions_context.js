// import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/auctions_reducer'
// import { products_url as url } from '../utils/constants'
import { events } from "../utils.js/data";
import {
    SET_EVENT,
    TOGGLE_EVENT,
} from '../actions'

const initialState = {
    index: 0,
    event: events[0]
}

const AuctionsContext = React.createContext()

export const AuctionsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleEvent = (n) => {
        dispatch({type: TOGGLE_EVENT, payload: n})
    }

    useEffect(() => {
        dispatch({type: SET_EVENT});
    }, []);

    return (
        <AuctionsContext.Provider value={{
            ...state,
            toggleEvent
        }}>
            {children}
        </AuctionsContext.Provider>
    )
}
// make sure use
export const useAuctionsContext = () => {
    return useContext(AuctionsContext)
}
