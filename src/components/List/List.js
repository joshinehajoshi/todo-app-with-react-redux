import React from 'react';
import { connect }  from 'react-redux';
import { deleteTodo } from '../../actions'

function List(props) {
    return (
        <div>
            {props.todos.map((a, index) => {
                return(
                    <ul key={index}>{a.message} <button onClick={() => props.dispatch(deleteTodo(a.id))}>Delete</button></ul>
                )
            })}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todo.data

})


export default connect(mapStateToProps)(List);
