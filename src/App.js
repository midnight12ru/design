import React, {Component, Fragment} from 'react';
import {MenuUI, MenuUILogo, MenuUIListItem, MenuUIList, MenuUIContact} from './Component/MenuUI'
import CardUI from "./Component/CardUI/CardUI";
import CardUIVarta from "./Component/CardUIVarta/CardUIVarta";
import ButtonUI from "./Component/ButtonsUI/ButtonUI";

import './App.scss'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <header className="header">
                    <MenuUI>
                        <MenuUILogo text logo={'Design'}/>
                        <MenuUIList>
                            <MenuUIListItem></MenuUIListItem>
                        </MenuUIList>
                        <MenuUIContact></MenuUIContact>
                    </MenuUI>
                </header>
                <div className="main">
                    <section className='main__slider slider'>
                        <ul className="slider__list">
                            <li className="slider__list_item"></li>
                            <li className="slider__list_item"></li>
                            <li className="slider__list_item"></li>
                            <li className="slider__list_item"></li>
                            <li className="slider__list_item"></li>
                        </ul>
                        <nav className='slider__dots'>
                            <span></span>
                        </nav>
                    </section>
                    <section className="main__design">
                        <div className="wrap">
                            <h4 className="main__design_title">Awesome design</h4>
                            <div className="main__design_list">
                                <CardUI/>
                                <CardUI/>
                                <CardUI/>
                            </div>
                        </div>
                    </section>
                    <section className="main__apps">
                        <div className="main__apps_block">
                            <div className="main__apps_mobile">
                                <div className="main__apps_img">
                                    <img src="" alt=""/>
                                    <img src="" alt=""/>
                                    <img src="" alt=""/>
                                </div>
                                <div className="main__apps_content">
                                    <h4 className="main__apps_title"></h4>
                                    <p className="main__apps_desc"></p>
                                    <a className='main__apps_link' href="#"></a>
                                </div>
                            </div>
                            <div className="main__apps_mobile">
                                <div className="main__apps_img">
                                    <img src="" alt=""/>
                                    <img src="" alt=""/>
                                    <img src="" alt=""/>
                                </div>
                                <div className="main__apps_content">
                                    <h4 className="main__apps_title"></h4>
                                    <p className="main__apps_desc"></p>
                                    <a className='main__apps_link' href="#"></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main__team">
                        <h4 className="main__team_label"></h4>
                        <p className="main__team_desc"></p>
                        <img src="" alt="" className="main__team_mockup"/>
                    </section>
                    <section className="main__works">
                        <div className="wrap">
                            <h4 className="main__works_label"></h4>
                            <ul className="main__works_list">
                                <li className="main__works_item"></li>
                            </ul>
                        </div>
                    </section>
                    <section className="main__landing">
                        <div className="wrap">
                            <h4 className="main__landing_label"></h4>
                            <p className="main__landing_desc"></p>
                            <div className="main__landing_list">
                                <CardUIVarta/>
                                <CardUIVarta/>
                                <CardUIVarta/>
                                <CardUIVarta/>
                            </div>
                            <ButtonUI/>
                        </div>
                    </section>
                </div>
                <footer className="footer">
                    <div className="wrap">
                        <div className="footer__col">
                            <h5 className="footer__title"></h5>
                            <ul className="footer__list">
                                <li className="footer__link"><a href="#" className="footer__link"></a></li>
                                <li className="footer__link"><a href="#" className="footer__link"></a></li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h5 className="footer__title"></h5>
                            <ul className="footer__list">
                                <li className="footer__link"><a href="#" className="footer__link"></a></li>
                                <li className="footer__link"><a href="#" className="footer__link"></a></li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h5 className="footer__title"></h5>
                            <ul className="footer__list">
                                <li className="footer__link"><a href="#" className="footer__link"></a></li>
                                <li className="footer__link"><a href="#" className="footer__link"></a></li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h5 className="footer__title"></h5>
                            <ul className="footer__list">
                                <li className="footer__link"><a href="#" className="footer__link"></a></li>
                                <li className="footer__link"><a href="#" className="footer__link"></a></li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h5 className="footer__title"></h5>
                            <ul className="footer__list">
                                <li className="footer__link">
                                    <address className='footer__addr'></address>
                                </li>
                                <li className='footer__tel'>
                                    <a href="tel:+"></a>
                                </li>
                                <li className='footer__mail'>
                                    <a href="mailto:"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    &copy;2017, Perfect Shapes Project
                </footer>
            </Fragment>
        );
    }
}