import React, {Component} from 'react';
import './MenuUIContact.scss';

export default class MenuUIContact extends Component{
    render() {
        let {num} = this.props
        return (
            <div>
                {num}
                MenuUIContent
            </div>
        );
    }
}
