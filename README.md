# react-course
## React Lesson: 4 [ context, Children API ]

`npm install` - Устанавливаем все необходимые для работы пакеты из package.json (зависимости) <br/>
`npm run dev` - Запускаем проект (запускается скрипт прописаный внутри package.json с ключем "dev")
<br/>

---

## Children API
**API** - Application Program Interface.
Я уже рассказывал вам о том что у нас есть возможность писать компоненты которые принимают дочерние дом-узлы - `this.props.children`. Так вот, Children API это грубо-говоря сборка методов для работы с свойством `children`.

Вот что он может: 
- Посчитать количество дочерних элементов 
    - `Children.count(children)`
- Преобразовать все дочерние элементы в массив
    - `Children.toArray(children)`
- Пройтись по всем дочерним элементам с помощь специальных методов
    - `Children.forEach(children, [callback function])`
    - `Children.map(children, [callback function])`
- Запретить множественные дочерние элементы.
    - `Children.only(children)`

Для того чтобы использовать эти возможности нам нужно импортировать в нужный нам файл `Children` из библиотеки `React`.

```javascript
import {Children} from 'react';

// then, in component, we can do something like this:
Children.count(this.props.children);
```

Использовать это можно например вот так - у нас есть компонент `Slider` и я хочу чтобы все его родительские элементы отрисовывались по очереди, как обычный простой слайдер.
```jsx
<Slider>
    <p>This is some content</p>
    <p>This is another content</p>
    <p>This is new another content</p>
</Slider>
```

Чтобы каждый параграф отрисовывался по очереди мы можем с помощью `Children.toArray(children)` сделать наш дочерний элемент массивом, это значит что теперь мы сможем обратиться к каждому дочернему элементу на прямую через индекс массива. 

```javascript
// in Slider component | Method render()
Children.toArray(this.props.children)[this.state.currentIndex]
```

Используя state мы можем каждые несколько секунд менять значение currentIndex на новое, и таким образом у нас получится простенький слайдер с использованием Children API.

--- 

## Components context
[**context**](https://reactjs.org/docs/context.html) - это настраиваемый объект который позволяет родительскому компоненту влиять на дочерний компонент без передачи `props`. Документация react рекомендует не использовать context неопытным разработчикам воизбежание сложностей.  

Но так как мы люди любопытные, и нам хочется знать все, я расскажу про context, но в общих чертах. 

Давайте представим ситуацию, у нас есть блог, в котором уже есть контент, но нам вдруг пришла в голову мысль сделать мультиязычность. 

Мне в голову сразу приходит мысль: "сделаю массив локалей, и в зависимости от текущей локали буду тянуть из базы данных нужный перевод." 

Вроде-бы ничего необычного. Но если начать, вы поймете, что у вас много компонентов, и каждому нужен перевод, тогда мы будем вынуждены пробрасывать много пропсов из компонента в компонент + вероятно писать какую-то логику при подключении компонента к store в случае если изначально наш перевод лежит там. 

Ну или как вариант написать запрос к базе данных с запросом на определенный язык в middleware и тогда у нас в store будет уже сразу конкретный язык. 

Но это не избавит нас от проблемы пробрассывания из компонента в компонент. Для этого мы можем использовать context.

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
**PS:** Для тех кому интересна мысль с реализацией мультиязычности можете ознакомиться с [этим видео](https://www.youtube.com/watch?v=lxq938kqIss&index=10&list=UUZkjWyyLvzWeoVWEpRemrDQ), откуда я собственно эту идею и позаимствовал.

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
      console.log('next state', store.getState()) // смотрим что изменилось в store 
      return result;
    }
  }
}

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

export default store;
```

Более простой и удобный вариант написания middleware с помощью стрелочных функций:
```javascript
const logger = store => next => action {
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
3. Создать компонент Notify который будет отвечать за оповещение о том что ваш пост был успешно создан. 
    - компонент должен быть *`position: fixed`* и удалятся из DOM через время. 
4. Сделать слайдер с использованием Children API.
    - Дополнительно: Использовать модуль react-transition-group для более плавной анимации слайдера.

**Задания: (Делать в ветке todo-list-task или в своем репозиторие)**
1. Сделать TodoList с использованием redux. TodoList должен иметь такой функционал:
    - добавление
    - удаление 
    - отметить выполненным
    - отменить статус выполненного 
    - сохраненние данных в localStorage (middleware)
    - детальная информация о каждом созданом todo
    - возможность посмотреть детальную информацию о todo только на отдельной странице (router)

**Дополнительно:** смотреть то что не понятно на [этом канале](https://www.youtube.com/watch?v=LTunyI2Oyzw) или на 
[этом](https://www.youtube.com/channel/UCY10FZglXJ8RL3xB04VpykQ/playlists?pbjreload=10)