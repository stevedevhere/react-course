# react-course
## React Lesson: 4 [ practice, work with API ]

`npm install` - Устанавливаем все необходимые для работы пакеты из package.json (зависимости) <br/>
`npm run dev` - Запускаем проект (запускается скрипт прописаный внутри package.json с ключем "dev")
<br/>

---


## Components context 
[context](https://reactjs.org/docs/context.html) - это настраиваемый объект который позволяет родительскому компоненту влиять на дочерний компонент без передачи `props`.

Предположим: <br>
В контексте какого-то возможного большого приложения помимо всего остального, у нас есть - рут-компонент сообщений, компонент сообщения, и компонент кнопки. Нужно чтобы в зависимости от родительского элемента кнопка обретала определенный цвет: 
```jsx
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string
};

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  getChildContext() {
    return {color: "purple"};
  }

  render() {
    const children = this.props.messages.map((message) =>
      <Message text={message.text} />
    );
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string
};

```

Для того чтобы передавать контекст в дочерний компонент необходимо сделать определенные действия:
1. В дочернем компоненте запросить конкретные свойства из родительского элемента, и тем самым проверить их на соотвествие нужному нам типу. (`contextTypes`)
2. Описать все передаваемые свойства в компоненте (`getChildContext()`)
3. Проверить на соответствие по типу в родительском компоненте (`childContextTypes`)

***Запомните:*** *объект context есть только у сложных компонентов.*

### Работа с API

[**API**](https://www.wikiwand.com/ru/API) - API (программный интерфейс приложения, интерфейс прикладного программирования) (англ. application programming interface, API) — набор готовых классов, процедур, функций, структур и констант, предоставляемых приложением (библиотекой, сервисом) или операционной системой для использования во внешних программных продуктах. Используется программистами при написании всевозможных приложений.

Для того чтобы работать с API в react нам нужно понимать где лучше будет обращаться к внешнему API.
Это зависит от того что мы используем в реакте для работы с данными. В нашем случае, мы используем redux, а как мы знаем, у redux есть такое понятие как `middleware`. Конечно, если это API не взаимодействует с данными на прямую, мы можем и не использовать middleware, а обращатся к нему например из подходящей нам функции жизненного цикла, но в нашем случае, мы рассмотрим случай когда нам нужно использовать middleware.

*Если что*
**Middleware** - в случае с react это прослойка между определенным событием и результатом его обработки, понятие middleware используется не только в react, вы можете его встретить практически повсюду где он может быть необходим.