/* global document */
import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'emotion';

// BrowserRouter это основной компонент react-router'a который
// дает нашему приложению работать с url
import { BrowserRouter as Router } from 'react-router-dom';

// Provider - это обертка которая позволяет всем компонентам коннектится к
// store и получать все необходимые для работы с redux функции. Уровень
// вложености обязателно должен быть таким как в примере - самый корневой
// компонент - Provider, а потом остальное, это может быть наш контейнер
// а может быть роутер и внутри него наш главный компонент, а в нем уже все что нам  нужно.
import { Provider } from 'react-redux';

// Cобранный store redux, он здесь нужен чтобы передать его в Provider.
import store from './store';
import '../sass/common.scss';

import RootComponent from './containers/RootComponent';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  input, textarea {
    border-bottom: solid 3px #333;
    padding: 10px;    
    font-size: 0.8rem;
    &:focus {
      border-color: #3736aa;
    }
  }
`;

render(
  <Provider store={store}>
    <Router>
      <RootComponent />
    </Router>
  </Provider>
  , document.getElementById('app')
);
