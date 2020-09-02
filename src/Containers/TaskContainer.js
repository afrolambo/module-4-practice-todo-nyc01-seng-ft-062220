import React from 'react'
import Tasks from '../Components/Tasks'
import ToDoForm from '../Components/ToDoForm'

class TaskContainer extends React.Component {

    render(){
        let tasks = this.props.tasks
        let filteredList = this.props.selectedTasks
        let category = this.props.selectedCategory

        let taskList = tasks.map(function(task, index){return <Tasks key={index} task={task} />})
        let filteredTasks = tasks.reduce(function (newArray, task) {
            if(task.category === category) {
                newArray.push(task)
            }
            return newArray
            }, filteredList)


        let filteredTaskList = filteredTasks.map(function(task, index){return <Tasks key={index} task={task} />})
        
        let listSorter = (tasks) => {
            if(category === "All"){
                return taskList
            } else {
                return filteredTaskList
            }
        }

        return(
            <div className="tasks">
                <h5>Tasks</h5>
                <ToDoForm />
                {listSorter()}
            </div>
        )
    }
}

export default TaskContainer