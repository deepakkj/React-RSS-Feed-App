import axios from 'axios';
import convert from 'xml-js';



const feedListSuccess = (id, response) => {
    console.log(response.headers);
    let result1 = convert.xml2json(response.data, {compact: true, spaces: 0, ignoreComment: true});
    const data = JSON.parse(result1);
    console.log(data);  
    return {
        type: 'ADD_CHANNEL',
        channels: {
               id,
               title: data.rss.channel.title._text,
               description: data.rss.channel.description._text,
               pubDate: data.rss.channel.pubDate._text,
               image: data.rss.channel.image,
               items: data.rss.channel.item,
            }
    }
}

// add channel action
export const addChannel = (id, url) => { 
    return function (dispatch) {
        return axios({
            method:'get',
            url,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                accept: 'text/html,application/xhtml+xml'
        },
            responseType: 'stream'
        }).then(
        response => dispatch(feedListSuccess(id, response)),
        error => console.log(error)
        );
    };



}

//  remove channel action
export const removeChannel = (id) => ({
  type: 'REMOVE_CHANNEL',
  id
})