import React, {Component} from 'react';
import MenuUILogo from "./MenuUILogo/MenuUILogo";
import MenuUIList from "./MenuUIList/MenuUIList";
import './MenuUI.scss';

export default class MenuUI extends Component {
    render() {
        console.log(this.props);

        return (
            <div className={'MenuUI'}>
                <MenuUILogo />
                <MenuUIList />
            </div>
        );
    }

}