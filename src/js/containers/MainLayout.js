import React from 'react';

import Header from '../components/Header';
import Posts from '../components/Posts';

// Основной компонент который в котором находиться все наше
// приложение, в дальнейшем именно этот компонент будет использован
// параметром функции ReactDOM.render();
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
            <div className="wrapper">
                <h1 className="page-title">React Lesson: 1 [ Components, JSX, state & props ]</h1>
                <Header />

                <Posts posts={ this.state.posts } />
            </div>
        );
    }
}