import React, { Component } from 'react';
import './Item.css';


class Item extends Component{
    render() {
        return (
            <div className="mem-item">
                <div className="mem-title">{this.props.title}</div>
                <img className="mem-image" src={this.props.imgUrl} alt={this.props.altText} />
            </div>
        );
    }
}


export default Item;