import React, { useState, useRef, useEffect } from 'react';
import TodoList from '../components/TodoList';

const LOCAL_STORAGE_KEY = 'todo_list'

function TheLandingPage(){
    const [todos, setTodos] = useState([]);
    const reftodoname = useRef() as any;
    const { v4: uuidv4 } = require('uuid');

    useEffect(() => {
        const storedlist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!)
        if (storedlist) setTodos(storedlist)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);


    function toggleTodo(id: number) {
        const newTodos: any = [...todos]
        const todo = newTodos.find((todo: { id: number; }) => todo.id === id)
        todo.complete = !(todo.complete)
        setTodos(newTodos)
    }

    function removeTodo(id: number) {
        const newTodos = todos.filter((todo: { id: number; }) => todo.id !== id)
        setTodos(newTodos)
    }

    function handleAddTodo() {
        const name = reftodoname.current['value'];
        if (name === '') return null;
        reftodoname.current['value'] = null;
        setTodos((prevTodos): any => {
            return [...prevTodos, { id: uuidv4(), content: name, complete: false, date: new Date().toLocaleString() }];
        })
    }

    function Cleardonetodos() {
        const newTodos = todos.filter((todo: { complete: boolean }) => !(todo.complete))
        setTodos(newTodos)
    }

    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            <input ref={reftodoname} type="text" />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={Cleardonetodos}>Clear Completed Todos</button>
            <div>{todos.filter((todo: { complete: boolean }) => !(todo.complete)).length} left to do</div>
        </>
    );
}

export default TheLandingPage