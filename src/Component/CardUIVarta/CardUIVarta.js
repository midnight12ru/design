import React, {Component} from 'react';
import './CardUIVarta.scss';

export default class CardUIVarta extends Component{
    render() {
        let {title, desc} = this.props;
        return (
            <div className={'CardUIVarta'}>
                <img src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg" alt="" className="CardUIVarta__img"/>
                <div className="CardUIVarta__content">
                    <h6 className="CardUIVarta__title">{title}</h6>
                    <p className="CardUIVarta__desc">{desc}</p>
                </div>
            </div>
        );
    }
}
