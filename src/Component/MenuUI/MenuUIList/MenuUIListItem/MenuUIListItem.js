import React, {Component} from 'react';

export default class MenuUIListItem extends Component{
    render() {
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}