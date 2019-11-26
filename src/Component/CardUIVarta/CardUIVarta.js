import React, {Component} from 'react';
import './CardUIVarta.scss';

export default class CardUIVarta extends Component{
    render() {
        return (
            <div className={'CardUIVarta'}>
                <img src="" alt="" className="CardUIVarta"/>
                <div className="CardUIVarta__content">
                    <h6 className="CardUIVarta__title"></h6>
                    <p className="CardUIVarta__desc"></p>
                </div>
            </div>
        );
    }
}
