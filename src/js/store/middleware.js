const middleware = store => next => action => {
    if(action.type === "DELETE_TODO") {
        let sure = confirm("Are u sure?");
        if(sure) {
            return next(action);
        }
        return;
    } else if(action.type === "ADD_TODO") {
        next(action);
        localStorage.setItem('data', JSON.stringify(store.getState().todos.data))
        return;
    }

    return next(action);
}

export default middleware;