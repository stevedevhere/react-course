import React from 'react';

// Route - компонент принимающий два основных свойства:
// 1. path - url
// 2. component - компонент который отобразиться по указаному в path url.
// так-же присуствует возможность делать компонент парным, что дает возможность
// вкладывать в него другие теги и компоненты.

// Switch - вспомогательный компонент который позволяет групировать определенные
// Routes

// Link - необходим для того чтобы переключатся между "страницами", по факту - аналог
// обычного <a>, но работает с помощью BrowserHistory или hashHistory
// вместо привычного нам href нужно писать to={`/some-url`}

import { Route, Switch } from 'react-router-dom';

import AddPost from '../components/AddPost';
import Header from '../components/Header';
import About from '../components/About';

import Posts from '../components/Posts';
import PostView from '../components/PostView';

import s from './styles';

const RootComponent = () => (
  <div className={s.root()}>
    <div className={s.wrapper()}>
      <Header />

      <Switch>
        <Route exact={true} path="/" component={Posts} />
        <Route exact={true} path="/search/:search" component={Posts} />
        <Route path="/add-post" component={AddPost} />
        <Route path="/about" component={About} />
        <Route path="/post-:postId" component={PostView} />

        <Route component={() => <div>page not found</div>} />
      </Switch>

    </div>
  </div>
);

export default RootComponent;
