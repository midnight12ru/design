import React, {Component, Fragment} from 'react';
import MenuUIListItem from "./MenuUIListItem/MenuUIListItem";
import './MenuUIList.scss'

export default class MenuUIList extends Component{
    render() {
        return (
            <Fragment>
                <MenuUIListItem dropdown>products</MenuUIListItem>
                <MenuUIListItem dropdown>design</MenuUIListItem>
                <MenuUIListItem dropdown>projects</MenuUIListItem>
                <MenuUIListItem dropdown>features</MenuUIListItem>
                <MenuUIListItem dropdown>company</MenuUIListItem>
                <MenuUIListItem dropdown>contacts</MenuUIListItem>
            </Fragment>
        );
    }
}