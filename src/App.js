import React, {Component} from 'react'
// import CardUI from "./Component/CardUI/CardUI";
// import ButtonUI from "./Component/ButtonsUI/ButtonUI";
// import CardUIVarta from "./Component/CardUIVarta/CardUIVarta";
import MenuUI from "./Component/MenuUI/MenuUI";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <MenuUI />
                </header>
                <main className="main">

                </main>
            </div>
        );
    }
}