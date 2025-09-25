import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';

function Todo({ todo, onRemoveTodos }) {

    const { id, content } = todo;

    const removeTodo = () => {
        onRemoveTodos(id)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '10px' }}>
            <div>
                {content}
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                <FaEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo                                                                              