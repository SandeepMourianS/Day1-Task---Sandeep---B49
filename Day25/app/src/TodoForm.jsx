import React, { useRef, useState } from 'react'
import './index.css'  


export const TodoForm = () => {

    const [todoTask , setTodoTask] = useState([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [editTaskId , setEditTaskId] = useState(null);
    const [status, setStatus] = useState("");

    //get title
    const handleChange1 = (event) => {
        setTitle(event.target.value);
    }
    //get description
    const handleChange2 = (event) => {
        setDescription(event.target.value); 
    }

    //add title and description to the card
    const addTask = () => { 
        if(handleChange1 && handleChange2){
            // make needed data into a data object
        const task = {
            id : todoTask.length === 0 ? 1 : todoTask[todoTask.length -1].id + 1,
            title : title,
            description :  description,
            status : "Not Complete",
        }

        if(task.title && task.description){
            setTodoTask([...todoTask, task]);
        }else{
            alert("Please enter both the feilds!!!");
            setTodoTask(todoTask);
        }
        setTitle("");
        setDescription("");
    }
    }
    //delete task
    const deleteTask = (id) => {
        setTodoTask(todoTask.filter((task)=> task.id !== id));
    }
    //edit task
    const editTask = (todo) => {
        setEditTaskId(todo.id);
        const taskToEdit =  todoTask.find((ele) => ele.id === todo.id);
        if(taskToEdit);
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
    }
    //save the edited task
    const saveEditedTask = () => {
        const updatedTaskList = todoTask.map(
            (task) => task.id === editTaskId  ? 
            {...task , title : title, description : description} 
            : task
        )
        setTodoTask(updatedTaskList);
        setTitle("");
        setDescription("");
        setEditTaskId(null);
    }
    //option selected
    const handleSelect = (todo) => {
        const value = event.target.value  
        setStatus(value);

        const updatedSelect = todoTask.map(
            (task) => task.id === todo.id  ? 
            {...task , status : status} 
            : task
        );
        if(updatedSelect);
        setTodoTask(updatedSelect);
    }

  return (
    <>
    <div className='todo-container'> 
        <h1>TODO LIST</h1>
        <div className='container'>
            <div className='title'>
                <input type="text"
                placeholder='Task Title'
                className='form-control'
                value={title}
                onChange={handleChange1} 
                required />
            </div>
            <div className='description'>              
                <input type="text"
                placeholder='Task Description'
                className='form-control'
                value={description} 
                onChange={handleChange2} required/>
            </div>
            {/* if nothing to edit, the button remains add task if not, it is save */}
            {editTaskId === null ? ( 
                <button className='btn btn-primary' type='submit' onClick={addTask}>Add Todo</button>
                ) : (
                <button className='btn btn-primary' type='submit' onClick={saveEditedTask}>Save</button>
            )}
        </div> 
        <div className='card-container'>
            {todoTask.map((todo) => {
                return (
                    <div className="card" key={todo.id}>
                        <div className='tit'> Task : {todo.title}</div>
                        <div className='des'> Describtion : {todo.description}</div>
                        <div className='stat'>Status : <select onChange={()=>handleSelect(todo)} >
                                <option value={"Not Complete"} id='n'>Not Completed</option>
                                <option value={"Complete"} id='c'>Completed</option>
                            </select>
                        </div>
                        {/* if edittaskid is true, it shows save button else edit */}
                        <span>
                            {editTaskId === todo.id ? (
                            <button onClick={saveEditedTask}
                            >
                                Save
                            </button> ) : (
                                <>
                            <button className='btn delete-btn btn-danger' 
                            onClick={()=>deleteTask(todo.id)}
                            >
                                Delete
                            </button>
                            <button 
                            className='btn edit-btn btn-info' 
                            onClick={()=>editTask(todo)}
                            >
                                Edit
                            </button>
                            </>
                            )}
                        </span>
                    </div>
                );
            })}
        </div>
    </div>
    </>
  )
}