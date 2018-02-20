import React from 'react';

const FeedItem = (props) => {
    return (
        <li className="feed-item">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <small>{props.publishedDate}</small>
        </li>
    );
}

export default FeedItem;