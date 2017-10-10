# react-course
## React Lesson: 4 [ context ]

`npm install` - Устанавливаем все необходимые для работы пакеты из package.json (зависимости) <br/>
`npm run dev` - Запускаем проект (запускается скрипт прописаный внутри package.json с ключем "dev")
<br/>

---

## Components context 
[**context**](https://reactjs.org/docs/context.html) - это настраиваемый объект который позволяет родительскому компоненту влиять на дочерний компонент без передачи `props`.

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