import React from 'react'

function Tasks({task}){
    
    return <div className="task">
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
        <button class="delete">X</button>
    </div>
}

export default Tasks