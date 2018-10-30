import React, { Component } from 'react';
import './App.css';
import './Memories.css';
import Item from './Item'
import Modal from '@material-ui/core/Modal';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import LocationOn from '@material-ui/icons/LocationOn';
import CalendarToday from '@material-ui/icons/CalendarToday';
import items from './memory'

class Memories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: -1,
        };
        var imgurl = "https://lh3.googleusercontent.com/H35S0GFNT9BR_h_YI8JW3DnWgEHaJIvgcc6XE5yavTDqNLmmR6Rh9omln8Vr6QYM7-oKiUQ1Ocb-SEwmx0JvIpp4U-oZLMHNxJ45TtTjpNxibbMpSX9J1I4rRButXIso7aZcAzCifnWlAiXzylidvw2DmV22LEKq2-6nyMsHVIhmkg2i8cTMC9MdfkrjR0Td6k8WGmkLuwSiCjL2d1Zly7d2-9fd40xzORD9Mn5m_nDF6VFlLo2HJYGSxjxW8gOD3WI93AxzqelgR1lXGXqwUv1316D_5O_025CINjBW8zTJrQsZQ1q93s83jMZip93Nqs51Dz-3uyeANv6TCUYFOtCzNhqscTIkswRt666pOwFLeJ6NYQUqKQmgbPSc4L0JPf5Ek4bJDDdu8C6M7tsXeLI8v9L03v7pgo52-wz6cEyIxNVh95fA4SKfzOlgPQqwwPYJlOEaLuPODRB1hRRzR-cqFpyh7-dUwopa84NfdTemWf4EaBgPP8HrLb8rDqZPXsPoi-X9N8ZZBaubS4_5lE1iN6-7Fl3yJ7Gs78b4IsEk9XPHuxUC1QnAzgY5nqFpgcJAk89-Hhzh6ID6uMrBAnP4vEmMsyioHMU1zW33cthGOX2DU2sFmdv1=w1862-h1396-no";
    }

    handleClose = () => {
        this.setState({ detail: -1 });
    };

    changeDetail (d) {
        this.setState({ detail: this.state.detail + d });
    };

    openDetail = (id, e) => {
        this.setState({ detail: id });
    };

    render() {
        var elements = [];
        var elements_id = [];
        var cid = 0;
        for(var i=0; i < items.length; i++)
        {
            var item = items[i];
            var common = item.labels.filter(value => -1 !== this.props.labels.indexOf(value));
            if (common.length > 0 && (item.city === this.props.city || this.props.city === 'all')) {
                elements.push(<Item key={cid} imgUrl={item.image} title={item.title} handler={this.openDetail} cid={cid}/>);
                elements_id.push(i);
                cid += 1;
            }
        }
        var current = items[0];
        if (this.state.detail >= 0) {
            current = items[elements_id[this.state.detail]];
        }
        return (
            <div className="Mem">
                {elements}
                <Modal
                    disableAutoFocus={true}
                    className='Modal'
                    open={this.state.detail >= 0}
                    onClose={this.handleClose}
                >
                    <div id = 'modal'>
                        <ChevronLeft className='Arrows' onClick={(e) => this.changeDetail(this.state.detail===0?0:-1)}/>
                        <div id='modal-card'>
                            <h3>{current.title}</h3>
                            <p>{current.description}</p>
                            <div id='detail_img'><img src={current.image} alt={''}/></div>
                            <div id='location'>
                                <LocationOn/>
                                <h5>{current.city}</h5>
                                <CalendarToday/>
                                <h5>{current.time}</h5>
                            </div>
                        </div>
                        <ChevronRight className='Arrows' onClick={(e) => this.changeDetail(this.state.detail>=(elements.length-1)?0:1)}/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Memories;
