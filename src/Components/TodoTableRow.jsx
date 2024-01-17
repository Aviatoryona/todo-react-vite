import correct from './Assets/correct.png'
import radio from './Assets/radio.png'
import remove from './Assets/remove.png'


const TodoTableRow = ({item={}, setTodos}) => {
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
        <tr className={'w3-hover-aqua'}>
            <td>{
                item.display === '' ? <img src={radio} alt={"radio"} style={{width: 20 + 'px', height: 20 + 'px'}}/>
                    : <img src={correct} alt={"correct"} style={{width: 20 + 'px', height: 20 + 'px'}}/>
            }</td>
            <td>
                <div onClick={() => toggle(item.no)}>{item.text}</div>
            </td>
            <td><img src={remove} alt={"remove"} style={{width: 20 + 'px', height: 20 + 'px'}}
                     onClick={() => deleteTodo(item.no)}/></td>
        </tr>
    )
}

export default TodoTableRow;