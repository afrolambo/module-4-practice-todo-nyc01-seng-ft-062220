import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import TaskContainer from './Containers/TaskContainer'
import Categories from './Components/Categories'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ], 
    filteredTasks: [],
    categories: CATEGORIES, 
    selected: "All"
  }

  clickHandler = (e) => {
    let button = e.target
    this.setState({
      selected: button.innerText,
      filteredTasks: []
    })
  }

  render() {
    console.log(this.state.selected)
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories selected={this.state.selected} categories={this.state.categories} clickHandler={this.clickHandler}/>
        <TaskContainer tasks={this.state.tasks} selectedCategory={this.state.selected} selectedTasks={this.state.filteredTasks} />
      </div>
    );
  }
}


export default App;
