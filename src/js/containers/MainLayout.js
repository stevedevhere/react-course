import React from 'react';

import Header from '../components/Header';
import Posts from '../components/Posts';

export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [
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
            <div className="wrapper" onClick="">
                <h1>React Lesson: 1 [ Components, JSX, state & props ]</h1>
                <Header />

                <Posts posts={ this.state.posts } />
            </div>
        );
    }
}