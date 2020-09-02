import React from 'react'

function Tasks({task}){
    console.log(task)
    return <div className="task">
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
    </div>
}

export default Tasks