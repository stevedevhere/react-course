const InitialState = {
    users: {
        id: 23123,
        username: 'Vasya',
        password: '12312312124'
    },
    todos: JSON.parse(localStorage.getItem('data')) || [
        {title: 'Learn React.js', descr: '1 descr for this.', completed: false},
        {title: 'Learn Router', descr: '2 descr for this.', completed: false},
        {title: 'Learn Redux', descr: '3 descr for this.', completed: false},
        {title: 'Make a little shop', descr: '4 descr for this.', completed: false},
    ]
}

export default InitialState;