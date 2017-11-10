import React from 'react';
import FaccTest from './components/FaccTest';
import HOCTest from './components/HOCTest';

import './App.scss';


export default class App extends React.Component {
    state = {
        switch: true
    }

    componentWillUpdate() {
        // let top = ;
        // console.dir(top);
        // window.scrollTo(0,0);
    }

    handleSwitch = () => {
        this.setState({ switch: !this.state.switch })
    }

    render() {
        return (
            <div className="wrapper" onClick={this.handleSwitch} ref="wrapper">
                {this.state.switch ? <h4>FaccTest</h4> : <h4>HOCTest</h4> }
                {this.state.switch ? <FaccTest/> : <HOCTest/> }
            </div>
        )
    }
}
