import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ newTask: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      newTask: '',
      tasks: [...this.state.tasks, this.state.newTask],
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              value={this.state.newTask}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
