import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <section className="todoapp">
          <TodoList todos={this.props.todos} filter={this.props.filter} />
        </section>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    filter: state.get('filter')
  };
}

export const TodoAppContainer = connect(mapStateToProps)(TodoApp);
