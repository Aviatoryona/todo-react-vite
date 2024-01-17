import './CSS/Todo.css'
import {useEffect, useRef, useState} from "react";
import TodoItems from "./TodoItems.jsx";
import TodoTable from "./TodoTable.jsx";

let count = 0;
const Todo = () => {

    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)
    localStorage.setItem('todos_count',count);
    const add = () => {
        setTodos([...todos, {
            no: count++,
            text: inputRef.current.value,
            display: ""
        }])
        inputRef.current.value = ""
    }

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')))
        count=localStorage.getItem('todos_count')
    }, []);

    useEffect(() => {
        setTimeout(()=>{
            localStorage.setItem('todos',JSON.stringify(todos))
        },100)
    }, [todos]);

    return (
        <div className='todo'>
            <div className={'todo-header'}>To-Do List</div>
            <div className={'todo-add'}>
                <input ref={inputRef} type={'text'} placeholder={'Add your task'}
                       className={'todo-input'}/>
                <div onClick={() => {
                    add()
                }} className={'todo-add-btn'}>
                    <i className={'fa fa-plus'}></i> Add
                </div>
            </div>
            <div className={'todo-list'}>
                {
                    todos.map((value, index) => {
                        return <TodoItems key={index} setTodos={setTodos} no={value.no} display={value.display}
                                          text={value.text}/>
                    })
                }
            </div>

            <div className={'todo-header'}>Table</div>
            <div>
                <TodoTable items={todos} setTodos={setTodos}/>
            </div>
        </div>
    )
}

export default Todo;