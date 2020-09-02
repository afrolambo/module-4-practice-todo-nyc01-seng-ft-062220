import React from 'react'
import Tasks from '../Components/Tasks'

class TaskContainer extends React.Component {

    

    render(){
        let tasks = this.props.tasks
        let taskList = tasks.map(function(task, index){return <Tasks key={index} task={task} />})
        return(
            <div className="tasks">
                <h5>Tasks</h5>
                {taskList}
            </div>
        )
    }
}

export default TaskContainer