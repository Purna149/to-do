import React from "react";
import Example from './model'
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './todo.css';
import { Button } from "react-bootstrap";

export const Data = () => {

    const [todoData, setTodoData] = useState([{title:"task 1",desc:'hi',id:1,status:'todo'},{title:"task 2",desc:'helo',id:2,status:'todo'},{title:"task 3",desc:'are',id:3,status:'todo'}]);
   
    const onTodoAdd = (item) => {
        setTodoData([...todoData, item])
    };

    const Options = (props) => {
        return (
            <Dropdown className="dropDown">
                <Dropdown.Toggle></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item> <Button className="btn-edit" color="info" onClick={() => handleEdit} id={props.id}>Edit</Button> </Dropdown.Item>
                    <Dropdown.Item> <Button className="btn-delete" color="info" onClick={handleDelete} id={props.id}>Delete</Button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
    const handleEdit = (i) => {
    };
    const handleDelete = (event) => {
        const data = [...todoData];
        const currentTodoIndex = todoData.findIndex((todoCurrentTask)=>
    todoCurrentTask.id == event.target.id
    )
    console.log(currentTodoIndex)
       data.splice(currentTodoIndex,1);
        setTodoData(data);
    };

    const handleinprogress = (event) =>{ 
    const currentTodoIndex = todoData.findIndex((todoCurrentTask)=>
    todoCurrentTask.id == event.target.id
    )
       const data = [...todoData];
       data[currentTodoIndex].status= 'inprogress';
       setTodoData(data)
    };

    const handleCompleted = (event) => {
     const currentTodoIndex = todoData.findIndex((todoCurrentTask)=>
        todoCurrentTask.id == event.target.id
        //console.log(event)
      )
      const data = [...todoData];
       data[currentTodoIndex].status = "completed"; 
      setTodoData(data);
    };
    console.log(todoData)
    return (
        <div className="data">
            <div className="todo">
                <span>To Do</span> <div className="buttonBody">
                    <Example setTodoData={onTodoAdd} id={todoData.length+1}/></div>
                <div className="bodys">
                    {
                        todoData.filter( i => i.status == 'todo' ).map((currentTask, ind) => {
                            return (<div className="addtodo" key={ind}>
                                <div className="titleBody">
                                    <div>{currentTask.title}</div>
                                    <div className="dropDownBody">
                                        <Options id={currentTask.id} />
                                    </div>
                                </div>
                                <br />
                                <div>{currentTask.desc}</div>
                                <br />
                                <button className="button" onClick={handleinprogress} id={currentTask.id}>In Progress</button>
                                <button className="button" onClick={handleCompleted} id={currentTask.id}>Completed</button>
                            </div>)
                        }
                        )}
                </div>
            </div>
            <div className="todo">
                <span>inprogres</span>
                <div className="bodys">
                    {
                        todoData.filter( i  => i.status == 'inprogress').map((currentTask, i) => {
                            return (
                                <div className="addtodo" key={i}>
                                    <div> {currentTask.title} <span Options={Options}></span></div>
                                    <div> {currentTask.desc} </div>
                                <button className="button" onClick={handleCompleted} id={currentTask.id}>Completed</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="todo">
                <span>completed</span>
                <div className="bodys">
                    {
                        todoData.filter( i => i.status == 'completed').map((currentTask, i) => {
                            return (
                                <div className="addtodo" key={i}>
                                    <div> {currentTask.title}</div>
                                    <div>{currentTask.desc}</div>
                                    <button className="button" onClick={handleinprogress} id={currentTask.id}>In Progress</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};














