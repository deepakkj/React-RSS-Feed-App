import axios from 'axios';

// add feed url action
export const addFeedURL = (id, url) => { 
    return {
        type: 'ADD_FEEDURL',
        feedURLs: {
            id,
            url
        }
    }

}

//  remove feed url action
export const removefeedURL = (id) => ({
  type: 'REMOVE_FEEDURL',
  id
})