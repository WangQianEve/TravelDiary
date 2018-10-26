import React, { Component } from 'react';
import './App.css';

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: 1,
            label: ['true', null, 'true']
        };
        this.options = ['Memories', 'Travel Guide'];
    }

    renderLabels() {
        if (this.state.option === 1) return null;
        var elements = [];
        var labels = ['foods', 'places', 'things'];
        for(var i=0; i < labels.length; i++) {
            elements.push(<p><input type="checkbox" checked={this.state.label[i]}/>{labels[i]}</p>)
        }
        return elements;
    };

    renderSectionView(index) {
        var classname = "Section";
        if (this.state.option === index) classname = 'ActiveSection';
        return (<div className={classname}>{this.options[index]}</div>);
    }

    render() {
        return (
            <div id='mainContent'>
                <section id='section-1'>
                <h3>Introduction1</h3>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                </section>
                <section id='section-2'>
                <h3>Introduction2</h3>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                </section>
                <section id='section-3'>
                <h3>Introduction3</h3>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                <p>Barcelona is a beautiful place</p>
                </section>
            </div>
        );
    }
}

export default Guide;
