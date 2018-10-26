import React, { Component } from 'react';
import './App.css';
import './Navbar.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import Scrollspy from 'react-scrollspy'



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [0],
            open: true,
        };
    }

    handleToggle = value => () => {
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

    render() {
        return (
            <div>
                <List component="nav" >
                    <ListItem button onClick={(e) => this.props.handler(0)}>
                        <ListItemText inset primary="Summary" />
                        {/*{this.props.page === 0 ? <ExpandLess /> : <ExpandMore />}*/}
                    </ListItem>
                    { this.props.page === 0 ? (
                        <Scrollspy className='Test' items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
                            <li className="Nav"><a href="#section-1">section 1</a></li>
                            <li className="Nav"><a href="#section-2">section 2</a></li>
                            <li className="Nav"><a href="#section-3">section 3</a></li>
                        </Scrollspy>
                    ) : null}
                    <ListItem button onClick={(e) => this.props.handler(1)}>
                        <ListItemText inset primary="Memories" />
                        {/*{this.props.page === 1 ? <ExpandLess /> : <ExpandMore />}*/}
                    </ListItem>
                    { this.props.page === 1 ? (
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {[0, 1, 2, 3].map(value => (
                                    <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                                        <Checkbox
                                            checked={this.state.checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        />
                                        <ListItemText primary={`Line item ${value + 1}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    ) : null}
                </List>
            </div>
        );
    }
}

export default Navbar;
