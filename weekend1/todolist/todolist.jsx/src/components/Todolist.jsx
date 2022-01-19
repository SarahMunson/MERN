import React, {useState} from 'react';

const Todolist = (props) => {
    // let [task, setTask] = useState("")
    // let [dueDate, setDueDate] = useState("")
    // let [description, setDescription] = useState("")
    let [taskObject, setTaskObject] = useState({
        task: "",
        dueDate: "",
        description: "",
        isComplete: false
    })
    let [listOfTasks, setListOfTasks] = useState([]);
    // let[taskCompleted, setTaskCompleted] = useState(false);

    const changeHandler = (e) => {
        
        setTaskObject({
            ...taskObject,
            [e.target.name]: e.target.value
        })
    }
    
    const addTask = (e) =>{
        e.preventDefault();

        setListOfTasks([...listOfTasks, taskObject])

        setTaskObject({
            task: "",
            dueDate: "",
            description: "",
            isComplete: false
        })
    }

    const toggleTask = (index) => {
        let [...copyList] = listOfTasks
        copyList[index].isComplete = !copyList[index].isComplete;

        setListOfTasks(copyList);

    }

    const deleteTask = (index) => {
        let newList = listOfTasks.filter((task, i) => {
            return i !== index
        })
        
        setListOfTasks(newList);
    }


    return (
            <>
        <form onSubmit={addTask}>
            <div className="form-group">
                <label> Task:</label>
                <input onChange={changeHandler} type="text" name="task" className="form-control" value = {taskObject.task}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Due Date:</label>
                <input onChange={changeHandler} type="date" name="dueDate" id="" className="form-control" value={taskObject.dueDate} />
            </div>
            <div className="form-group">
                <label htmlFor="">Description:</label>
                <input onChange={changeHandler} type="text" name="description" id="" className="form-control" value={taskObject.description} />
                <input type="submit" value="Add Task" className="button btn-success mt-3" />
            </div>
        </form>
        <hr />
        {
            listOfTasks.map((item, i) => {
                return(
                    <div key= {i} style= {{textDecoration: item.isComplete? "line-through" : ""}}>
                        <h3>{item.task}</h3>
                        <p>Due: {item.dueDate}</p>
                        <p>Description: {item.description}</p>
                        <p><input type="checkbox" name="" onClick={() => toggleTask(i)} /></p>
                        <p><button onClick={() => deleteTask(i)} className="btn btn-danger">Delete Task</button></p>
                    </div>
                )
            })
        }
        </>
    )
}

export default Todolist