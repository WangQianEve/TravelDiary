import React, { Component } from 'react';
import './App.css';
import './Guide.css';
import summary from './summary.json';

class Guide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var sections = ['Introduction', 'What we did', 'What we ate', 'Weather', 'Cost', 'Transportation', 'Other Tips'];
        var section_names = ['introduction', 'things', 'foods', 'weather', 'cost', 'transportation', 'tips'];
        var elements = [];
        for (var i=0; i<sections.length; ++i) {
            var current = summary[this.props.city];
            elements.push(
                <section id={'section-'+i}>
                    <h3>{sections[i]}</h3>
                    <div className='content'>
                        {i===(sections.length-1)?current[section_names[i]].map(value => (<p>{value}</p>)):<p>{current[section_names[i]]}</p>}
                    </div>
                </section>
            );
        }
        return (
            <div className='Guide'>
                {elements}
            </div>
        );
    }
}

export default Guide;
