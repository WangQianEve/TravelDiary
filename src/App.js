import React, {Component} from 'react';
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
            checked: ['foods', 'things', 'places'],
        };
        this.options = ['All -', '- Athens -', '- Santorini -', '- Rome -', '- Vatican -', '- Nice -', '- Eze -', '- Monaco -', '- Barcelona'];
        this.cityNames = ['all', 'athens', 'santorini', 'rome', 'vatican', 'nice', 'eze', 'monaco', 'barcelona'];
    }

    handleLabels = value => () => {
        const {checked} = this.state;
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
        if (this.state.page === 1)
            return <Memories labels={this.state.checked} city={this.cityNames[this.state.place]}/>;
        if (this.state.page === 0)
            return <Guide city={this.cityNames[this.state.place]}/>;
    }

    handleNav = (id, e) => {
        this.setState({page: id});
    };

    handleMap = (value, e) => {
        this.setState({place: value});
    };

    render() {
        var buttons = [];
        for (var i = 0; i < this.options.length; i++) {
            if (this.state.place === i) {
                buttons.push(<p id='selected' onClick={this.handleMap.bind(this, i)}>{this.options[i]}</p>);
            } else {
                buttons.push(<p onClick={this.handleMap.bind(this, i)}>{this.options[i]}</p>);
            }
        }
        return (
            <div className="App">
                <div id="mapNav">
                    <p id='title'>North To Mediterranean</p>
                    {buttons}
                </div>
                <div className="App-header" ref={(divElement) => this.divElement = divElement}>
                    <Map place={this.state.place}/>
                </div>
                <div className="App-content">
                    <div className="App-filter">
                        <Navbar page={this.state.page} handler={this.handleNav} handleLabels={this.handleLabels}
                                checked={this.state.checked}/>
                    </div>
                    <div className="App-main-content">
                        {this.renderPageView()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
