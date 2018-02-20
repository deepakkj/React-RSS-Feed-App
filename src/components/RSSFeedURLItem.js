import React from 'react';
import { NavLink } from "react-router-dom";

const RSSFeedURLItem = (props) => {

    return(
      <li className="clearfix">
        <NavLink to={props.id} activeClassName="is-active">{props.url}</NavLink>
        <button className="pull-right" onClick={() => props.removeURLAndChannel(props.id)}>X</button>
      </li>
    )
}

export default RSSFeedURLItem;
