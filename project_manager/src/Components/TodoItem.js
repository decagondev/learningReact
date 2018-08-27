import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}


// Validation o props

TodoItem.propTypes = {
    project: PropTypes.object
}


export default TodoItem;
