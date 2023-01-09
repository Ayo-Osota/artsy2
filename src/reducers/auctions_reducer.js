import {
    SET_EVENT,
    TOGGLE_EVENT
} from '../actions'
import { events } from '../utils.js/data';

const auctions_reducer = (state, action) => {
    switch (action.type) {
        case SET_EVENT:
            return {...state, event: events[state.index]}
            
        case TOGGLE_EVENT:
            let newIndex;
          if  (action.payload + state.index < 0) {
             newIndex = events.length - 1
          } else if (action.payload + state.index > events.length - 1) {
             newIndex = 0
          } else {
             newIndex = state.index + action.payload
          }
            return { ...state, index: newIndex, event: events[newIndex] }

        default:
            // return state
            throw new Error(`No Matching "${action.type}" - action type`)
        // break;
    }
}

export default auctions_reducer;
