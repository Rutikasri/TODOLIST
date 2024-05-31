import React,{useState} from 'react'

export const EditTodoForm = ({editTask, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(typeof editTask);
        editTask(value, task.id);
        setValue("");
    };

    console.log("Type of editTask in EditTodoForm:", typeof editTask);

    return (
        <form className= "TodoForm" onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>


    );
};