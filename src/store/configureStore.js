import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import channelsReducer from '../reducers/channelsReducer';
import feedURLReducer from '../reducers/feedURLReducer';

//  create createStore
export default (initialState) => {
  const store = createStore(
  combineReducers({
    channels: channelsReducer,
    feedURLs: feedURLReducer,
  }),
  initialState,
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
  return store;
}
