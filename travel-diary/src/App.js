import React, { Component } from 'react';
import './App.css';
import Memories from './Memories'
import Guide from './Guide'
import Map from './Map'
import Navbar from './Navbar'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          page: 1,
          place: 0,
          checked: ['foods', 'things', 'places'],
          map_height: 0,
          value: 0,
      };
      this.options = ['all', 'barcelona', 'nice', 'eze', 'monaco', 'rome', 'vatican', 'athens', 'santorini'];
  }

    handleLabels = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

  renderPageView() {
      if(this.state.page === 1)
          return <Memories labels={this.state.checked} place={this.state.place}/>;
      if(this.state.page === 0)
          return <Guide place={this.state.place}/>;
  }

  componentDidMount() {
      const height = this.divElement.clientHeight;
      this.setState({ map_height: height });
  }

    handleMap = (id, e) => {
      this.setState({place:id});
  };

  handleNav = (id,e) => {
      this.setState({page:id});
  };

    handleChange = (value, e) => {
        this.setState({ place: value });
    };

  render() {
      var buttons = [];
      for(var i=0; i < this.options.length; i++)
      {
          if (this.state.place === i) {
              buttons.push(<p id='selected' onClick={this.handleChange.bind(this, i)}>{this.options[i]}</p>);
          } else {
              buttons.push(<p onClick={this.handleChange.bind(this, i)}>{this.options[i]}</p>);
          }
      }
    return (
      <div className="App">
          <div id="mapNav">
              {buttons}
          </div>
        <div className="App-header" ref={ (divElement) => this.divElement = divElement}>
          <Map place={this.state.place} handler={this.handleMap}/>
        </div>
        <div className="App-content">
            <div className="App-filter">
                <Navbar page={this.state.page} handler={this.handleNav} handleLabels={this.handleLabels} checked={this.state.checked}/>
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
