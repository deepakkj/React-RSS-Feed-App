import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FeedItem from './FeedItem';

class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentChannelIndex: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const channelIndex = nextProps.feedURLs.findIndex(x => `/${x.id}` === nextProps.routeLocation.pathname)
    console.log(channelIndex);
    this.setState({currentChannelIndex: channelIndex !== -1 ? channelIndex : this.state.currentChannelIndex});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated---- ", prevProps);
  }

  renderFeedURL = (index) => {
    const headerData = this.props.feedURLs[index]
    console.log("headerData ---",headerData);
    return headerData ? headerData.url : 'Please add a RSS URL';
  }

  renderChannelFeeds = (index) => {
    const items = this.props.channels[index];
    console.log("items ---",items && items.items);
    if(items && items.items) {
        return items.items.map((item, index) => 
          <FeedItem
            key={index}
            title={item.title._text}
            description={item.description._text}
            publishedDate={item.pubDate._text}
          />
      );
    } 
     return '';
  }
    render() {
      console.log(this.props);
      console.log("currentChannelIndex : ",this.state.currentChannelIndex);
      return(
        <div className="col-xs-offset-3 col-xs-9 col-offset-sm-3 col-sm-9 col-md-offset-2 col-md-10 main-screen">
          {this.props.channels && this.renderFeedURL(this.state.currentChannelIndex)  }
          <ul>
            {this.props.channels && this.renderChannelFeeds(this.state.currentChannelIndex)}
          </ul>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return { 
    channels: state.channels,
    feedURLs: state.feedURLs
  }
}

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actionCreators, dispatch) }
// }

export default connect(mapStateToProps, null)(MainScreen);
