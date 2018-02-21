import React from 'react';
import AddRSSFeedForm from './AddRSSFeedForm';
import RSSFeedURLList from './RSSFeedURLList';

const SideBar = () => {
    return(
      <div className="col-xs-3 col-sm-3 col-md-3 sidebar">
          <h3><span className="glyphicon glyphicon-th-list"></span>RSS Feed App</h3>
           <AddRSSFeedForm />
           <RSSFeedURLList />
      </div>
    )
}

export default SideBar;
