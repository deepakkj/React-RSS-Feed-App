import React from 'react';
import uuid from 'uuid';

import { store } from './../app';
import { addChannel } from './../actions/channelActions';
import { addFeedURL } from './../actions/feedURLActions';

export default class AddRSSFeedForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            url: ''
        }
    }
    
    handleURLChange = (e) => {
        this.setState({url: e.target.value});
     }

    onSubmit = (e) => {
        e.preventDefault();
        // http://blog.grabonrent.com/feed/rss
        if(this.state.url.trim() !== '') {
            let id = uuid();
        store.dispatch(addChannel(id, this.state.url))
        .then(store.dispatch(addFeedURL(id, this.state.url)));
        }
    }

    render() {
        return(
            <div className="rssfeed-form">
                <form>
                        <input type="url" placeholder="Enter RSS feed URL" value={this.state.url} onChange={this.handleURLChange} autoComplete="true" required></input>
                        <button type="submit" onClick={this.onSubmit}>Add Feed</button>
                </form>
            </div>
        )
    }   
}


