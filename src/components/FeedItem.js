import React from 'react';

const FeedItem = (props) => {
    return (
        <li className="panel panel-default feed-item">
            <div className="panel-body">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <small>Date: {props.publishedDate}</small>
            </div>
        </li>
    );
}

export default FeedItem;