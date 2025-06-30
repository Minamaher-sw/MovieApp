// import { useState } from "react";

import { useState } from "react"

// function Todo() {
//     const [todo, setTodo] = useState({
//         task: "",
//         todolist: []
//     });

//     const [error, setError] = useState({
//         taskError: ""
//     });

//     const [counter, setCounter] = useState(1);

//     const validate = (ev) => {
//         const value = ev.target.value;
//         setTodo({ ...todo, task: value });

//         setError({
//         ...error,
//         taskError: value.trim().length === 0 ? "Task is required" : ""
//         });
//     };

//     const addTask = (ev) => {
//         ev.preventDefault();

//         if (todo.task.trim().length === 0) {
//             setError({ ...error, taskError: "Task is required" });
//         return;
//         }

//         const newTask = {
//         id: counter,
//         task: todo.task
//         };

//         setTodo({
//         task: "",
//         todolist: [...todo.todolist, newTask]
//         });

//         setCounter(counter + 1);
//     };

//   const complete = (id) => {
//     const updated = todo.todolist.map((item) =>
//       item.id === id ? { ...item, completed: !item.completed } : item
//     );

//     setTodo({
//       ...todo,
//       todolist: updated
//     });
//   };

//   const deleteTask = (id) => {
//     const filtered = todo.todolist.filter((item) => item.id !== id);

//     setTodo({
//       ...todo,
//       todolist: filtered
//     });
//   };
//     return (
//         <div className="container mt-5 bg-primary bg-gradient p-3 rounded-3">
//         <h2 className="mb-4 text-light">TO DO APP</h2>

//         <form onSubmit={addTask}>
//             <div className="mb-3">
//             <label htmlFor="taskInput" className="form-label text-light">Add New Task</label>
//             <input
//                 type="text"
//                 className="form-control"
//                 id="taskInput"
//                 name="todo"
//                 value={todo.task}
//                 onChange={validate}
//                 placeholder="Enter your task"
//             />
//             <p className="text-danger">{error.taskError}</p>
//             </div>
//             <button type="submit" className="btn btn-light">Add</button>
//         </form>
//         <ul className="mt-4 list-group">
//             {todo.todolist.map((obj) => (
//             <>
//                 <div className="row gap-1 mb-1 text-light">
//                     <div className="col-7 bg-light text-dark" style={{ textDecoration: obj.completed ? "line-through" : "none" }}>
//                         {obj.task}
//                      </div>
//                     <div className="col-4">
//                         <button onClick={() => complete(obj.id)} className="btn btn-sm text-danger bg me-2">
//                             {obj.completed ? "Undo" : "Done"}
//                         </button>
//                         <button onClick={() => deleteTask(obj.id)} className="btn btn-sm btn-danger">
//                             Delete
//                         </button>
//                     </div>
        
//                 </div>
//             </>
//             ))}
//         </ul>
//         </div>
//     );
// }

// export default Todo;

function Todo() {
    // todo state
    const [todo ,setTodo]=useState({
        task:"",
        todoList:[]
    })
    //error state
    const [error, setError]=useState({
        todoErr:"required"
    })
    // counter state
    const [counter, setCounter]=useState({
        count:1
    })
    //validate
    const Validite =(ev)=>{
        const value = ev.target.value;
        setTodo({ ...todo, task: value });
        setError({...error,todoErr:(ev.target.value.length == 0)?"required":""})
    }

    const addNewTask =(ev)=>{
        ev.preventDefault();
        if(!error.todoErr)
        {

            const newTask={
                id:counter.count,
                complete:false,
                task:todo.task
            }
            setTodo({
                ...todo,
                todoList: [...todo.todoList, newTask]
                });
                // setTodo({...todo.todoList,newTask});
            setCounter({count:(++counter.count) })
        }
        else{
            setError({...error,todoErr:"Task required"})
        }
    }

    const complete =(id)=>{
        console.log(id)
        const update =todo.todoList.map((obj)=>{
            return (obj.id == id) ? {...obj ,complete : !obj.complete} :obj;
        })

        console.log(update)

        setTodo({
           ...todo,
            todoList:update,
        })
    }
    const deleteTask = (id) => {
        const filtered = todo.todoList.filter((item) => item.id !== id);

        setTodo({
        ...todo,
        todoList: filtered
        });
    };
    return (
        <div className="container mt-5 bg-primary bg-gradient p-3 rounded-3">
            <h2 className="mb-4 text-light">TO DO APP</h2>

            <form onSubmit={(ev)=>{
                addNewTask(ev)
            }}>
                <div className="mb-3">
                <label htmlFor="taskInput" className="form-label text-light">Add New Task</label>
                <input
                    type="text"
                    className="form-control"
                    id="taskInput"
                    name="todo"
                    placeholder="Enter your task"
                    value={todo.taks}
                    onChange={(ev)=>{
                        Validite(ev)
                    }}
                />
                <p className="text-danger">{error.todoErr}</p>
                </div>
                <button type="submit" className="btn btn-light">Add</button>
            </form>
            <ul>
                {todo.todoList.map((obj)=>{
                    return<>
                        <div className="row mt-2">
                            <li key={obj.id}
                                className ="col-7 bg-primary text-primary bg-light "
                                style={{ textDecoration: obj.complete ? "line-through" : "none" }} >
                                    {obj.task}
                            </li>
                            <div className="col-4">
                                <button onClick={() => complete(obj.id)} className="btn btn-sm bg-light text-primary me-2">
                                    {obj.completed ? "Undo" : "Done"}
                                </button>
                                <button onClick={() => deleteTask(obj.id)} className="btn btn-sm btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </>
                })}
            </ul>
        </div>
    )
}

export default Todo
