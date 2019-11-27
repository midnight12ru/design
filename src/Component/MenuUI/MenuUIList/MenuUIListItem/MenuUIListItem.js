import React, {Component} from 'react';

export default class MenuUIListItem extends Component{
    render() {
        console.log(this.props)
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}