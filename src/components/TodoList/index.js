import React, {Component} from 'react'

//Components
import TodoItems from '../TodoItems'

class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tarefa: '',
      items: []
    }

    this.addItem = this
      .addItem
      .bind(this)

    this.log = this
      .log
      .bind(this)

    this.deleteItem = this
      .deleteItem
      .bind(this)

  }

  addItem(ev) {
    let state = this.state

    if (this._tarefaInput.value !== '') {
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now()
      }

      this.setState({
        items: [
          ...state.items,
          newItem
        ]
      })
    }

    this.setState({tarefa: ''})
    ev.preventDefault()
  }

  log() {
    console.log(this.state.items)
  }

  deleteItem(key) {
    console.log(`Item clicado ${key}`)

    let filtro = this
      .state
      .items
      .filter((item) => {
        return (item.key !== key)
      })

    this.setState({items: filtro})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Nova tarefa"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(ev) => this.setState({tarefa: ev.target.value})}
            ref={(ev) => this._tarefaInput = ev}/>

          <button type="submit">
            Adicionar
          </button>
        </form>

        {/* <button onClick={this.log}>Log</button> */}

        <TodoItems lista={this.state.items} delete={this.deleteItem}/>
      </div>
    )
  }
}

export default TodoList;