import React, { useState } from 'react';
import axios from 'axios';

function AddTodo() {
	const [title, setTitle] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [message, setMessage] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://localhost:3001/api/todo', {title, targetDate});
    setTitle('');
    setTargetDate('');
    setMessage('Todo successfully created');
  }

  const showMessage = () => {
    if(message === ''){
      return <div></div>
    }
    return <div className="alert alert-success" role="alert">
      {message}
    </div> 
  }

	return (
		<div className="container">
      <form onSubmit={onSubmit}>
        <h1>Add New Todo</h1>
        <div className="form-group">
          <label>Title</label>
          <input 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            placeholder="Title"
            className="form-control">
          </input>
        </div>
        <div className="form-group">
          <label>Target Date</label>
          <input 
            value={targetDate} 
            type="date" 
            onChange={e => setTargetDate(e.target.value)} 
            className="form-control">
          </input>
        </div>
        <button className="btn btn-primary">Add Todo</button>
      </form>
      {showMessage()}
    </div>
	)
}

export default AddTodo;