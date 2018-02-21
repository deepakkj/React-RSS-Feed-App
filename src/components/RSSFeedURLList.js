import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import { store } from './../app';

import RSSFeedURLItem from './RSSFeedURLItem';

import { removefeedURL } from './../actions/feedURLActions';
import { removeChannel } from './../actions/channelActions';

class RSSFeedURLList extends React.Component {  

    renderFeedURLList = (list) => {
     return list.map((value,index) =>
        <RSSFeedURLItem
            key={value.id}
            {...value}
            removeURLAndChannel={this.removeURLAndChannel}
        />
     );  
    } 

    removeURLAndChannel = (id) => {
        store.dispatch(removefeedURL(id));
        store.dispatch(removeChannel(id));
    }

    render() {
        return (
            <div>
            <h4>Feed URLs</h4>
        <ul className="list-group">
                {this.renderFeedURLList(this.props.feedURLs)}
        </ul>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return { feedURLs: state.feedURLs }
  }

export default connect(mapStateToProps, null)(RSSFeedURLList);