import React from 'react';

import Header from '../components/Header';
import Posts from '../components/Posts';


export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1>React Lesson: 2 [ Redux ]</h1>
                <Header />

                <Posts />
            </div>
        );
    }
}