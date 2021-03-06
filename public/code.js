
const updateDone = (itemId, isDone) => {
    // fetch(toggleDoneEndpoint, { method: "?", body: JSON.stringify({id: item.id})}).then(res => res.json()).then(renderFromServer)
    console.log(`item: ${itemId}, done: ${isDone}`);
}

/* type Todo = {label: string, id: number, done: boolean}; */

// :: Todo -> JQuery
const TodoItem = (item) => {
    const $cb = $(`<input id="${item.id}" type="checkbox" value="${item.id}" />`).prop('checked', item.done).on('change', () => updateDone(item.id, !item.done))
    return $(`<li><label for="${item.id}">${item.label}</label></li>`).prepend($cb)
}

// :: () -> Todo[]
const fetchList = () => {
    // return fetch(listEndpoint).then(res => res.json())
    return Promise.resolve([
        {label: 'buy potatoes', id: 0, done: true},
        {label: 'wash potatoes', id: 1, done: false},
        {label: 'cook potatoes', id: 2, done: false},
        {label: 'eat potatoes', id: 3, done: false},
    ]);
};

// :: string -> Promise<void>
const addTodo = (label) => {
    // fetch(addTodoEndpoint, { method: "?", body: JSON.stringify({text})}).then(res => res.json())
    console.log(`add todo ${label}`);
    return Promise.resolve();
}

// :: () -> void
const renderFromServer = () => fetchList().then(items => $('#items').empty().append(items.map(TodoItem)))

$(document).ready(() => {
    renderFromServer();

    $('#addTodo').on('submit', (e) =>{
        e.preventDefault();
        const label = $('#todoTxt').prop('value')
        addTodo(label).then(renderFromServer)
    })
});