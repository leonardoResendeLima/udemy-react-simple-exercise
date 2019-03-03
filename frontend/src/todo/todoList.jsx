import React from 'react'
import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className='col-md-1'>
                    <IconButton style='danger' icon='close' onClick={() => props.handleRemove(todo._id)} hide={todo.done} />
                    <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done} />
                    <IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done} />
                </td>
            </tr>
        ))
    }


    return (
        <div>
            <br />
            <br />
            <table className='table'>
                <thead>
                    <tr>
                        <th className='col-md-12'>Descricao</th>
                        <th className='col-md-1'>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}
