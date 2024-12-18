export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props
    console.log(todo);

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.complete}>
                    <h6 onClick={() => {
                        handleCompleteTodo(todoIndex)
                    }}>
                        Done
                    </h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>
                        Delete
                    </h6>
                </button>
            </div>
        </div>
    )
}