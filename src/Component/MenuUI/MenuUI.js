import React, {Component} from 'react';

import './MenuUI.scss';

export default class MenuUI extends Component {
    render() {
        console.log(this.props);
        return (
            <div className={'MenuUI'}>
                {this.props.children.map((el,index)=>{
                    console.log(el);
                    if (el.props.text && el.type.name === 'MenuUILogo') return <h4 key={index}>{el}</h4>;
                    if (el.type.name === 'MenuUIList') return <ul className={'MenuUI__List'} key={index}>{el}</ul>;
                    if (el.type.name === 'MenuUIContact') return <div key={index}>{el}</div>
                })}
            </div>
        );
    }

}