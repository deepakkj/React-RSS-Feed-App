import React from 'react';
import AddRSSFeedForm from './AddRSSFeedForm';
import RSSFeedURLList from './RSSFeedURLList';

const SideBar = () => {
    return(
      <div className="col-xs-3 col-sm-3 col-md-2 sidebar">
           <AddRSSFeedForm />
           <RSSFeedURLList />
      </div>
    )
}

export default SideBar;
