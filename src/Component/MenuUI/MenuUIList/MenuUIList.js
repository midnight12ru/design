import React, {Component} from 'react';
import MenuUIListItem from "./MenuUIListItem/MenuUIListItem";
import './MenuUIList.scss'

export default class MenuUIList extends Component{
    render() {
        return (
            <ul className={'MenuUI__List'}>
                <MenuUIListItem dropdown>products</MenuUIListItem>
                <MenuUIListItem dropdown>design</MenuUIListItem>
                <MenuUIListItem dropdown>projects</MenuUIListItem>
                <MenuUIListItem dropdown>features</MenuUIListItem>
                <MenuUIListItem dropdown>company</MenuUIListItem>
                <MenuUIListItem dropdown>contacts</MenuUIListItem>
            </ul>
        );
    }
}