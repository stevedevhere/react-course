import React from 'react';

import Posts from '../components/Posts';
import PostView from '../components/PostView';
import PostEdit from '../components/PostEdit';

// Route - компонент принимающий два свойства:
// 1. path - url
// 2. component - компонент который отобразиться по указаному в path url.
// так-же присуствует возможность делать компонент парным, что дает возможность
// вкладывать в него другие теги и компоненты.

// Switch - вспомогательный компонент который позволяет групировать определенные
// Routes и переключаться между ними

// Link - необходим для того чтобы переключатся между "страницами", по факту - аналог
// обычного <a>, но работает с помощью BrowserHistory или hashHistory
// вместо привычного нам href нужно писать to={`/some-url`}

import { Route, Switch, Link } from 'react-router-dom';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                {/* <Menu/> */}
                <Switch> {/* posts group */}
                    <Route exact path="/react-course/" component={Posts}/>
                    <Route path="/react-course/post-:postId" component={PostView}/>
                    {/* <Route path="/edit-:postId" component={PostEdit}/> */}

                    <Route path="*" component={() => <div>Page Not Found</div>}/>
                </Switch>

            </div>
        ); 
    }
}

