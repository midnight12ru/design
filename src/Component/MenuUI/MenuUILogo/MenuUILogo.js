import React, {Component, Fragment} from 'react';
import './MenuUILogo.scss'

export default class MenuUILogo extends Component{
    render() {
        let {logo} = this.props;

        console.log(this.props);
        return (
            <Fragment>
                {logo}
            </Fragment>
        );
    }
}
