# react-course
## React Lesson: 4 [ context ]

`npm install` - Устанавливаем все необходимые для работы пакеты из package.json (зависимости) <br/>
`npm run dev` - Запускаем проект (запускается скрипт прописаный внутри package.json с ключем "dev")
<br/>

---

## Components context
[**context**](https://reactjs.org/docs/context.html) - это настраиваемый объект который позволяет родительскому компоненту влиять на дочерний компонент без передачи `props`. Документация react рекомендует не использовать context неопытным разработчикам воизбежание сложностей.  

Но так как мы люди любопытные, и нам хочется знать все, я расскажу про context, но в общих чертах. 

Давайте представим ситуацию, у нас есть блог, в котоом уже есть контент, но нам вдруг пришла в голову сделать мультиязычность. Мне в голову сразу приходит мысль: "сделаю массив локалей, и в зависимости от текущей локали буду тянуть из базы данных нужный перевод." Вроде-бы ничего необычного. Но если начать, вы поймете, что у вас много компонентов, и каждому нужен перевод, тогда мы будем вынуждены пробрасывать много пропсов из компонента в компонент + вероятно писать какую-то логику при подключении компонента к store в случае если изначально наш перевод лежит там. Ну или как вариант написать запрос к базе данных с запросом на определенный язык в middleware и тогда у нас в store будет уже сразу конкретный язык. Но это не избавит нас от проблемы пробрассывания из компонента в компонент. Для этого мы можем использовать context.

Context передается из родительского элемента во все дочерние элементы которые требуют для своей работы конкретные свойства из объекта context.

Выглядит это так:
```jsx
// in parent component class Posts
childContextTypes = {
  locale: PropTypes.array.isRequired
}; // static object in parent component

// in parent component class Posts
getChildContext = () =>({ locale: this.props.locale }); // func in parent component 

// in child component, for example class Post
contextTypes = {
  locale: PropTypes.array.isRequired
}; // statiс object in child component

```

Давайте отойдем от нашей мысли с переводом, и попробуем разобрать context на более простом варианте.
Я хотел бы чтобы в зависимости от того какой родительский элемент у моей кнопки - у меня менялся ее цвет.

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

## Middleware (redux)
Middleware - это специальная прослойка между нашим действием (action) и его обработчиком (reducer). 

Функция middleware пишется вот так: 
```javascript
// Custom middleware - logger 
function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log('dispatching', action) // пока что наш action не сработал.
      let result = next(action) // вызвали наш action
      console.log('next state', store.getState()) // смотрим что изменилось в store после того как мы вызвали action
      return result;
    }
  }
}

/////////////////////////////////////////////
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

export default store;
```

Более простой и удобный вариант написания middleware с помощью стрелочных функций:
```javascript
const customMiddleware = store => next => action {
  console.log('dispatching', action) // пока что наш action не сработал.
  let result = next(action) // вызвали наш action
  console.log('next state', store.getState()) // смотрим что изменилось в store
  return result;
}
```

Писать middleware ввиде трех функций обязательнь так как этого требует redux. <br>
Прочитать детальнее о том как нужно писать middleware можно [здесь](http://redux.js.org/docs/advanced/Middleware.html)

**Задания: (Делать в ветке lesson-4)**
1. Написать `middleware` который будет обновлять данные в localStorage. (данные == посты) (3 балла)
2. Создать компонент меню, с рабочими пунктами - "создать пост", инпут поиска (3 балла) и главная на которой должны отображатся все посты. (`<Link/>`)
3. Создать компонент инпута внешний вид которого будет зависеть от родительского компонента. [`context`] (3 балла)
4. Создать компонент Notify который будет отвечать за оповещение о том что ваш пост был успешно создан. 
    - компонент должен быть *`position: fixed`* и удалятся из DOM через время. 

**Задания: (Делать в ветке todo-list-task или в своем репозиторие)**
1. Сделать TodoList с использованием redux. TodoList должен иметь такой функционал:
    - добавление
    - удаление 
    - отметить выполненным
    - отменить статус выполненного
    - сохраненние данных в localStorage
    - детальная информация о каждом созданом todo
    - возможность посмотреть всю информацию о todo на отдельной странице