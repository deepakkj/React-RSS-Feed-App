import React from 'react';
import SideBar from './SideBar';
import MainScreen from './MainScreen';

const AppScreen = (props) => {
    return(
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <MainScreen routeLocation={props.location}/>
        </div>
      </div>
    )
}

export default AppScreen;
