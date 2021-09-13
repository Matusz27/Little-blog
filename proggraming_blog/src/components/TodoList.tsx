import Todos from './todo'

export default function TodoList({ todos, toggleTodo, removeTodo}: any) {
    return (
        todos.map((todo: any) =>{
            return <Todos key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        })
    )
}
