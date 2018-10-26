import React, { Component } from 'react';
import './App.css';
import Memories from './Memories'
import Guide from './Guide'
import Map from './Map'
import Navbar from './Navbar'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          page: 0,
          place: 0,
      };
  }

  renderPageView() {
      if(this.state.page === 1)
          return <Memories/>;
      if(this.state.page === 0)
          return <Guide/>;
  }

  handleMap = (id, e) => {
      this.setState({place:id});
  };

  handleNav = (id,e) => {
      this.setState({page:id});
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Map place={this.state.place} handler={this.handleMap}/>
        </div>
        <div className="App-content">
            <div className="App-filter">
                <Navbar page={this.state.page} handler={this.handleNav}/>
            </div>
            <div className="App-main-content">
                {/*<div id="gallery-expand"></div>*/}
                {this.renderPageView()}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
