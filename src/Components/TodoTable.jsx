import TodoTableRow from "./TodoTableRow.jsx";

const TodoTable = ({items = [], setTodos}) => {
    return (
        <div className={'w3-row'}>
            <div className={'w3-col'}>
                <div className={'w3-container w3-responsive'}>
                    <table className={'w3-table w3-striped w3-margin-top w3-small'} style={{width:'100%'}}>
                        <thead className={'w3-amber'}>
                        <tr>
                            <th>:::</th>
                            <th>Name</th>
                            <th>:::</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            items.map((value, index) => {
                                return <TodoTableRow key={index} item={value} setTodos={setTodos}/>
                            })
                        }
                        </tbody>
                        <tfoot>
                           <tr>
                               <td colSpan={3}><span>&copy; {new Date().getFullYear()}</span></td>
                           </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TodoTable;