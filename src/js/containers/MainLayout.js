import React from 'react';

import Header from '../components/Header';
import Posts from '../components/Posts';

export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {title: "react"},
                {title: "react-router"},
                {title: "redux"},
                {title: "jsx"},
                {title: "virtual-dom"},
                {title: "components"}
            ]
        };
    }


    render() {
        return (
            <div className="wrapper">
                <h1>React Lesson: 1 [ Components & JSX ]</h1>
                <Header />

                <Posts posts={ this.state.data } />
            </div>
        );
    }
}