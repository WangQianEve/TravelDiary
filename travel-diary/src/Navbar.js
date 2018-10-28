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
        return (
            <div>
                <List component="nav" id='nav' >
                    <ListItem button onClick={(e) => this.props.handler(0)}>
                        <ListItemText inset primary="Summary" />
                    </ListItem>
                    { this.props.page === 0 ? (
                        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
                            <ListItemLink href="#section-1">
                                <ListItemText primary="Section 1" />
                            </ListItemLink>
                            <ListItemLink href="#section-2">
                                <ListItemText primary="Section 2" />
                            </ListItemLink>
                            <ListItemLink href="#section-3">
                                <ListItemText primary="Section 3" />
                            </ListItemLink>
                        </Scrollspy>
                    ) : null}
                    <ListItem button onClick={(e) => this.props.handler(1)}>
                        <ListItemText inset primary="Memories" />
                    </ListItem>
                    { this.props.page === 1 ? (
                        <List component="div">
                            {['foods', 'things', 'places', 'personal'].map(value => (
                                <ListItem key={value} role={undefined} dense button onClick={this.props.handleLabels(value)}>
                                    <Checkbox
                                        checked={this.props.checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                    <ListItemText primary={value} />
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
