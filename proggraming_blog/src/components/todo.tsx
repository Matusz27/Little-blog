
export default function Todos({ todo, toggleTodo, removeTodo}:any) {

    function handletodochange(){
        toggleTodo(todo.id)
    }

    function handleremoveTodo(){
        removeTodo(todo.id)
    }

    return (
        <div>
            <label>
                {todo.content}
                <input type="checkbox" checked={todo.complete} onChange={handletodochange}/>
                {todo.date}
                <button onClick={handleremoveTodo}>Delete</button>
            </label>
        </div>
    )
}
