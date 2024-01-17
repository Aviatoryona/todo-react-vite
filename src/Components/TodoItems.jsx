import './CSS/TodoItems.css'
import correct from './Assets/correct.png'
import radio from './Assets/radio.png'
import remove from './Assets/remove.png'

const TodoItems = ({no, display, text, setTodos}) => {

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter((todo) => todo.no !== no);
        setTodos(data)
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === '') {
                    data[i].display = 'line-through'
                } else {
                    data[i].display = ''
                }
                break;
            }
        }
        setTodos(data)
    }
    return (
        <div className={'todoitems'}>
            <div className={`todoitems-container ${display}`} onClick={() => toggle(no)}>
                {
                    display === '' ? <img src={radio} alt={"radio"} style={{width: 20 + 'px', height: 20 + 'px'}}/>
                        : <img src={correct} alt={"correct"} style={{width: 20 + 'px', height: 20 + 'px'}}/>
                }
                <div className={'todoitems-text'}>{text}</div>
            </div>
            <img src={remove} alt={"remove"} style={{width: 20 + 'px', height: 20 + 'px'}}
                 onClick={() => deleteTodo(no)}/>
        </div>
    )
}

export default TodoItems;