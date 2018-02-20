//channels reducer
import { storage } from 'store';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHANNEL': return [...state, action.channels]
                        break;
    case 'REMOVE_CHANNEL': return state.filter((channel) => (channel.id!==action.id) );
                        break;
    default:  return state;
  }
};
