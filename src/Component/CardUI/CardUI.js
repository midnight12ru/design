import React, {Component} from 'react';
import './CardUI.scss'

export default class CardUI extends Component {
    render() {
        let {title, desc, active} = this.props;

        let activeClass = active ? 'CardUI Active': 'CardUI';

        return (
            <div className={activeClass} >
                <div className='CardUI__img'>
                    <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                </div>
                <div className='CardUI__content'>
                    <h6 className="CardUI__title">{title}</h6>
                    <p className="CardUI__desc">{desc}</p>
                </div>
            </div>
        )
    };
}
