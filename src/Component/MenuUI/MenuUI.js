import React, {Component} from 'react';
import MenuUILogo from "./MenuUILogo/MenuUILogo";
import MenuUIList from "./MenuUIList/MenuUIList";
import MenuUIContact from "./MenuUIContact/MenuUIContact";

import './MenuUI.scss';

export default class MenuUI extends Component {
    render() {
        return (
            <div className={'MenuUI'}>
                <MenuUILogo/>
                <MenuUIList/>
                <MenuUIContact />
            </div>
        );
    }

}