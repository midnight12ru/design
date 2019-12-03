import React, {Component} from 'react';
import './MenuUIListItem.scss'

export default class MenuUIListItem extends Component{
    render() {
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}