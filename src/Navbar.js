import React, { Component } from 'react';
import './App.css';
import './Navbar.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Scrollspy from 'react-scrollspy'

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

class Navbar extends Component {
    render() {
        var sections = ['Introduction', 'What we did', 'What we ate', 'Weather', 'Cost', 'Transportation', 'Other Tips'];
        var section_names = [];
        var elements = [];
        for (var i=0; i<sections.length; ++i) {
            elements.push(
                <ListItemLink key={i} className='ListItemLink' href={"#section-"+i}>
                    {sections[i]}
                </ListItemLink>
            );
            section_names.push("section-"+i);
        }
        return (
            <div>
                <List component="nav" id='nav' >
                    <ListItem id={this.props.page===0? 'activeSection':'selection'} button onClick={(e) => this.props.handler(0)}>
                        Summary
                    </ListItem>
                    { this.props.page === 0 ? (
                        <Scrollspy items={ section_names } currentClassName="is-current">
                            {elements}
                        </Scrollspy>
                    ) : null}
                    <ListItem id={this.props.page===1? 'activeSection':'selection'} button onClick={(e) => this.props.handler(1)}>
                        Memories
                    </ListItem>
                    { this.props.page === 1 ? (
                        <List component="div">
                            {['foods', 'things', 'places', 'personal'].map(value => (
                                <ListItem className='ListItem' key={value} role={undefined} dense button onClick={this.props.handleLabels(value)}>
                                    <Checkbox
                                        color='default'
                                        checked={this.props.checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                    {value}
                                </ListItem>
                            ))}
                        </List>
                    ) : null}
                </List>
            </div>
        );
    }
}

export default Navbar;
