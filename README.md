# react-course
## React Lesson: 3 [ router, redux ]

`npm install` - Устанавливаем все необходимые для работы пакеты из package.json (зависимости) <br/>
`npm run dev` - Запускаем проект (запускается скрипт прописаный внутри package.json с ключем "dev")

 ---

### React-router
**Router** - модуль подключаемый к react который позволяет отрисовывать определенные компоненты в зависимости от пути
(в адрессной строке, например `/about`)

Работа с этим модулем достаточно проста поскольку он сделан в виде компонентов.

Для того чтобы начать работу с `react-router` его разумеется для начала необходимо установить в нашу папку с помощью `npm i react-router-dom` (так как я уже указал это в `package.json` нужно написать лишь `npm i` и он доустановит не достающие пакеты исходя из указаного в `package.json`). Нужно устанавливать именно `react-router-dom` так как в последней версии роутера все необходимое для работы с роутером в вебе собрано в модуле с таким названием. По той же причине по которой в реакт есть разделение на `react` - ядро библиотеки, и `react-dom` модуль библиотеки
который отвечает непосредственно за работу с браузером.

На текущий момент последней версией `react-router` является `v4` которую мы собственно и используем. Стоит учесть, что различия в версиях этого модуля влечут за собой определенные изменения в структуре а также логике использования этого модуля. Об этом можно более детально прочесть в статьях посвещенных этому вопросе.

[**BrowserRouter**](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md) -  это основной компонент react-router'a который позволяет нашему приложению работать с url с помощью
History API который позволяет меняеть url без перезагрузки страницы.


[**Route**](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md) -  компонент принимающий два свойства:
1. path - url
2. component - компонент который отобразиться по указаному в path url.
так-же присуствует возможность делать компонент парным, что дает возможность
вкладывать в него другие теги и компоненты. Нужен для того чтобы отоборажать определенные
компоненты при определенных url.

[**Switch**](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md) - вспомогательный компонент который позволяет групировать определенные
`Route` и переключаться между ними.


[**Link**](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md) - необходим для того чтобы переключатся между "страницами", по факту - аналог
обычного `<a>`, но работает с помощью BrowserHistory или hashHistory вместо привычного нам href нужно
писать `to={"/some-url"}`


Все это - компоненты, и мы можем использовать их там где нам необходимо.

Нет строгого правила как "правильно" строить структуру когда мы используем `react-router`.

Мы можем создать один компонент в котором мы будем указывать только правила отображения наших компонентов:
```jsx
class Router extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Route path="/" component={Home} />
                <Route path="/contacts" component={Contacts} />
            </div>
        )
    }
}
```

А можем, прописывать правила в каком-то из компонентов:
<!-- TODO: test this js  -->
```jsx
import {Route} from 'react-router-dom';

class User extends React.Component {

    handleFormOnSubmit() {
        // validate and after this send data to server, for validate them there.
        // after this do some logic operation.
    }

    render() {
        return (
            <div className="wrapper">
                <Switch>
                    <Route exact path="/user-:id" component={UserProfile}  />
                    <Route path="/settings" component={Settings} />

                    <Route path="/auth">
                        <div className="form-container">
                            <form>
                                <input type="email" ref={/*instance => ...*/}/>
                                <input type="password" ref={/*instance => ...*/} />
                                <button onClick={this.handleFormOnSubmit}>Send</button>
                            </form>
                        </div>
                    </Route>

                    <Route path="*" component={UserPageNotFound}/>
                </Switch>
            </div>
        )
    }
}
```

У нас есть возможность группировать связаные роуты (`Route`) c помощью `Switch`, для того чтобы у нас появилась возможность обработать страницу 404й ошибки для конкретной группы адрессов (url path).

Можем задавать динамические ссылки (example: `path="/user-:id"`), **:id** это параметр в который будет подставлятся все из адресной строки в случае если первая часть адрессной строки совпадает с указаным нами в path текстом. Этот параметр мы можем получить внутри компонента который отрисовывается по этому пути.

Но просто так работать это не будет, нам нужно сказать нашему приложению что мы используем Router. Для этого нам нужно обернуть наше приложение (которое мы обернули в один основной компонент) в еще один компонент - `BrowserRouter`.
```jsx
// ./index.js

ReactDOM.render(
    <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
    , document.getElementById('app'));
```

*На заметку, у компонента `BrowserRouter` может быть только один дочерний дом узел (элемент)*

Теперь вы можете создать приложение с несколькими страницами, но на каком-то этапе вы столкнетесь с трудностью, для примера возьмем наш репозиторий, у нас есть посты. Предположим, я хочу на ссылке вида `post-:id` отобразить соответствующий пост, но чтобы получить определенный пост, нам нужно откуда-то этот пост взять, на определенной стадии когда у нас данные лежат в компоненте MainLayout нам пришлось бы при отрисовке компонента отправлять callback функцию этому компоненту внутри которого все находиться и запрашивать конкретный пост, что не очень хорошая затея, потому что неудобно с этим работать. Так же есть вариант, делать запрос к базе данных в функции жизненного цикла `componentDidMount`, но это не очень удобно. Для решения подобных проблем есть определенные модули, одним из них является `redux`.

---

### Redux
**Redux** - это модуль который позволяет объединить все данные в одном месте для упрощения взаимодействия с ними. Без redux вам приходилось использовать пробрасывание данных из компонента в компонент, на простых проектах разумеется это не такая большая проблемма, но в случае с большими проектами возникает проблема - все слишком запутано, эту проблему как-раз таки и решает redux.

Он был написан человеком по имени *Dan Abaramov* специально для библиотеки React, но он так-же может использоваться и с другими библиотеками и фреймворками.

В redux есть определенный принцип, начнем пожалуй с того что взаимодействие с всеми данными контролируется одним объектом именуемым - store. На самом деле, если посмотреть на этот объект с помощью console.log можно заметить что прямого доступа к данным нет, но есть метод `getState()` который нам их любезно предоставляет. Так-же в этом объекте есть и другие методы, но о них позже.
<br/>

**Принцип работы redux**
![Схема redux](https://iamakulov.com/talks/redux-in-real-life/slides/slide17.png)
У нас есть компонент, которым в этой схеме выступает "представление", мы хотим что-то сделать с данными, например добавить еще один пост, для этого мы пишем `action` (функция), который вызываем в определенном с помощью метода dispatch, после чего этот `action` проходит через `middleware`, а затем попадает в `reducer` который обрабатывает наш `action` и возвращает измененные данные в `store`, после чего компонент который был подписан на изменения в `store` будет автоматически перерисован.

**xxx:** Окей, теперь мы знаем что есть какой-то store и из него с помощью определенного метода можем получить данные. и что?<br/>
**yyy:** Теперь нужно понимать, как именно нам эти данные туда ложить, и как именно давать нашим компонентам знать о том что мы это сделали.

Для того чтобы изменить наши данные, нам нужно как-то оповестить наш `store` о том что мы хотим изменить данные, в `redux` этим звеном выступают так называемые `actions`.

#### Actions
В контексте нашего разговора это функция которая возвращает объект. Но не просто возвращать, а возвращать с помощью функции dispatch которая опять же находиться в нашем объекте `store`, но принято все это дело упрощать, вместо того чтобы каждый раз писать: return `dispatch({ type: t.ADD_POST, payload })` внутри нашего `action` мы делаем это уже при подключении нашего компонента в специальной функции mapDispatchToProps, но об этом чуть позже.
Эта функция обращается к `store` с определенной информацией о событии, store понимает что это пришло из action и отдает это дело под управление специального обработчика событий redux который называется `reducer`

```javascript
export const addPost = (payload) => ({type: types.ADD_POST, payload});
```

Как показано в примере, это обычная функция, которая возвращает объект со свойством type и payload.
- _`type`_ - нужен для того чтобы обработчик нашего события (о котором вы тоже узнаете чуть чуть позже) понимал о том что конкретно ему нужно сделать

- _`payload`_ - это данные с которыми нашему обработчику что-то нужно сделать, их можно передавать, а можно не передавать, зависит от того что мы хотим сделать

Под каждое событие мы должны писать свой `action` который по своему влияет на данные. Каждый `action` влечет за собой перересовку компонента который подписан на изменения, как это сделать вы узнаете чуть позже.


#### Reducers
Каждый такой `action` как я уже и сказал чем-то обрабатывается, это "что-то" называеться `reducer`, он занимается лишь обработкой наших обращений к `store` по средствам `actions`.
По принятым правилам reducer должен быть чистой функцией. <br/>

_**Чистая функция** — это функция, которая при одинаковых аргументах всегда возвращает одни и те же значения и не имеет видимых побочных эффектов._


```javascript
export default function posts(state = InitialState.posts, action) {
   let {type, payload} = action;

   switch(type) {
       case types.ADD_POST:
           return [...state, payload];
       default:
           return state;
   }
};
```

Это reducer, он обрабатывает наши `actions`. Можно создать несколько редьюсеров для разных по смыслу событий.

Reducer это функция (всегда), которая принимает на вход два параметра:
1. **state** - это кусочек данных из всего приложения который мы можем с помощью этого редьюсера изменять.
2. **action** - это событие которое мы вызвали.

Для того чтобы наш редьюсер отработал нам нужно добавить его в наш объект  `store`, сделать это можно только тогда когда мы этот `store` создаем, делаем мы это с помощью функции `createStore` взятой из модуля `redux`.
```javascript
import reducers from './reducers';

const store = createStore(reducers);
```
***Посмотреть более наглядно можно в ветке `lesson-3` в файле index.js по пути `./store/index.js`***

Мы описали `action`, написали `reducer` который будет его обрабатывать, добавили редьюсер в `store`, но что дальше?

Чтобы наше приложение понимало что такое `store` и могло с ним взаимодействовать нам необходимо обернуть наш основной компонент в компонент `Provider` который находиться в модуле `react-redux`, и передать в него наш `store` (example: `store={store}`). Таким образом наше приложение получает возможность взаимодействовать со `store`.

*На заметку, у компонента `Provider` может быть только один дочерний дом узел (элемент).*

```jsx
// ./index.js

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));
```

<!-- TODO: @connect -->
### Component connecting to store
Но, этого всеравно не достаточно, нам нужны определенные данные из store в каком-то определенном компоненте.
Для этого нам нужно подписать нужный нам component на наш store, делается это по средствам декоратора connect.

```javascript
// Функция connect является связующим между компонентом и store из redux,
// эта функция принимает два параметра:
// 1. функция, в которую аргументом приходит state из store, которая возвращает объект, в котором
//    мы должны указать какие данные хотим получить в своем компоненте
// 2. функция, которая должна вернуть ваши actions, которые в дальнейшем тоже попадут в
//    свойства компонента который оборачиваете.
import { connect } from 'react-redux';

// Это специальная функция которая все полученые в объекте actions будет оборачивать в функцию dispatch,
// это нужно для того чтобы вызывая свои actions вы не просто получали объект, а обращались с
// ним в глобальный store, где с помощью reducers будет идти обработка этого action'a
import { bindActionCreators } from 'redux';

// mapStateToProps - выбираем какие данные нам нужны из store, которые в дальнейшем запишутся в props
// компонента который мы оборачиваем.
const mapStateToProps = state => ({ posts: state.posts });

// mapDispatchToProps - передаем все нужные нам actions в оборачеваемый компонент, но перед этим оборачиваем
// все actions в функцию dispatch
const mapDispatchToProps = dispatch => ( bindActionCreators({ addPost }, dispatch) );

// @connect - "@" - обозначает декоратор, это es7. Функция "connect" декорирует объект, имеется ввиду что на
// выходе мы получаем новый, измененный компонент который содержит в себе дополнительные функции и свойства,
// а какие именно - мы определяем в функциях передаваемых внутрь функции connect.
```
Мы можем написать это ввиде декоратора (es7 `@`) так и простой функцией:
```javascript
export default connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
```

<!-- TODO: Action dispatch -->
### Dispatch Actions
Как я уже писал выше, чтобы изменить наши данные нам нужно вызвать `action`, теперь, когда мы подписались на изменения в
store с помощью функции connect мы можем это сделать, поскольку при подписке на store мы указали какие именно action мы хотим иметь в нашем компоненте.
и как я уже описал выше вызывая action который мы передали в props нашего компонента с помощью функции connect мы донесем информацию
о нашем событии в store:
```
this.props.addPost(data) -> middleware -> reducer -> reducer update store -> subscribed component re-rendering
```

**Задания (Делать в ветке lesson-3):**
1. Добавить возможность редактировать пост [redux] (2 балла)
2. Исправить работу функции contentView написаной внутри компонента "Post" так,
чтобы развернутым был только один компонент. [redux] (3 балла)
3. Добавить компоненту AddPost возможность добавлять `links` (3 балла)
4. Добавить стилизации на свое усмотрение, человек дизайн которого мне понравиться
больше всего получит дополнительный балл. (не обязательно)

**Дополнительно (Делать в ветке playground или в своем репозитории):**
- Переписать [пятнашки](https://codepen.io/uppermanis/pen/zwaWvW) на react с redux.