import React from 'react'
import '../App.css'
function TodoCreate() {
    return (
        <div className='todo-creates'>
            <input type="text" className='todo-input' placeholder='Todo Giriniz..' />
            <button className='todo-create-button'>Todo Ekle</button>

        </div>
    )
}

export default TodoCreate