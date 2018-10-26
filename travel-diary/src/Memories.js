import React, { Component } from 'react';
import './App.css';
import './Memories.css';
import Item from './Item'
// import Filter from './Filter'
//
class Memories extends Component {
    constructor(props) {
        super(props);
        var imgurl = "https://lh3.googleusercontent.com/H35S0GFNT9BR_h_YI8JW3DnWgEHaJIvgcc6XE5yavTDqNLmmR6Rh9omln8Vr6QYM7-oKiUQ1Ocb-SEwmx0JvIpp4U-oZLMHNxJ45TtTjpNxibbMpSX9J1I4rRButXIso7aZcAzCifnWlAiXzylidvw2DmV22LEKq2-6nyMsHVIhmkg2i8cTMC9MdfkrjR0Td6k8WGmkLuwSiCjL2d1Zly7d2-9fd40xzORD9Mn5m_nDF6VFlLo2HJYGSxjxW8gOD3WI93AxzqelgR1lXGXqwUv1316D_5O_025CINjBW8zTJrQsZQ1q93s83jMZip93Nqs51Dz-3uyeANv6TCUYFOtCzNhqscTIkswRt666pOwFLeJ6NYQUqKQmgbPSc4L0JPf5Ek4bJDDdu8C6M7tsXeLI8v9L03v7pgo52-wz6cEyIxNVh95fA4SKfzOlgPQqwwPYJlOEaLuPODRB1hRRzR-cqFpyh7-dUwopa84NfdTemWf4EaBgPP8HrLb8rDqZPXsPoi-X9N8ZZBaubS4_5lE1iN6-7Fl3yJ7Gs78b4IsEk9XPHuxUC1QnAzgY5nqFpgcJAk89-Hhzh6ID6uMrBAnP4vEmMsyioHMU1zW33cthGOX2DU2sFmdv1=w1862-h1396-no";
        this.items = {
            'title': {
                description: "description",
                image: imgurl, altText: "sample image",
            }
        };
        this.state = {
            inventory: ['title', 'title', 'title', 'title', 'title'],
        }
    }

    render() {
        var elements = [];
        for(var i=0; i < this.state.inventory.length; i++)
        {
            var title = this.state.inventory[i];
            var item = this.items[title];
            elements.push(<Item imgUrl = {item.image} altText = {item.altText} title = {title} />)
        }
        return (
            <div className="Mem">
                {elements}
            </div>
        );
    }
}

export default Memories;
