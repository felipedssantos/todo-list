import React, {Component} from 'react'

//Components
import TodoList from './components/TodoList'


class App extends Component {

  render() {
    return (
      <div className="container">
        <h2>Lista de tarefas</h2>
        <TodoList />
      </div>
    )
  }
}

export default App