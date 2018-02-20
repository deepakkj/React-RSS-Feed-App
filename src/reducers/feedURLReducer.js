//feed url reducer

export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_FEEDURL': return [...state, action.feedURLs]
                        break;
    case 'REMOVE_FEEDURL': return state.filter((feedURL) => (feedURL.id!==action.id) );
                        break;
    default:  return state;
  }
};
