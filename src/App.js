import React, {Component} from 'react'
import CardUI from "./Component/CardUI/CardUI";
import ButtonUI from "./Component/Buttons/ButtonUI";
import CardUIVarta from "./Component/CardUIVarta/CardUIVarta";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    app component
                    <CardUI
                        title={'test title'}
                        desc={'test desc'}
                        active={'false'}
                    />
                    <hr/>
                    <ButtonUI/>
                    <hr/>
                    <CardUIVarta />
                </header>
            </div>
        );
    }
}