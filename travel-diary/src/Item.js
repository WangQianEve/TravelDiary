import React, { Component } from 'react';
import './Item.css';


class Item extends Component{
    render() {
        return (
            <div className="mem-item" onClick={(e) => this.props.handler(this.props.key)}>
                <div className="mem-title">{this.props.title}</div>
                <img className="mem-image" src={this.props.imgUrl} alt={''}/>
            </div>
        );
    }
}


export default Item;