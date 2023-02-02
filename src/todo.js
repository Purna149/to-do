import React, { useRef } from "react";
import Example from './model'
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './todo.css'
import { Button } from "react-bootstrap";

export const Data = () => {

    const [todoData, setTodoData] = useState([]);

    const onTodoAdd = (item) => {
        setTodoData([...todoData, item])
    };
    
    const handleEdit = (i) => {
       // const newTodos = [...todoData];
       
    };
    
    const handleDelete = index => {
        const delect = [...todoData];
        delect.splice(index, 1);
        setTodoData(delect);
    };
    const handleCompleted = (i) => {
    };
    return (
        <div className="data">
            <div className="todo">
                <span>To Do</span> <div className="buttonBody">
                    <Example setTodoData={onTodoAdd} /></div>
                <div className="todoBody">
                    {
                        todoData.map((e, ind) => {
                            return (<div className="addtodo" key={ind}>
                                <div className="titleBody">
                                    <div>{e.text}</div>
                                    <div className="dropDownBody">
                                        <Dropdown className="dropDown">
                                            <Dropdown.Toggle></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item> <Button className="btn-edit" color="info" onClick={() => handleEdit(e.text, e.desc)}>Edit</Button> </Dropdown.Item>
                                                <Dropdown.Item> <Button className="btn-delete" color="info" onClick={handleDelete}>Delete</Button></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <br />
                                {e.desc}
                                <br />
                                <button className="button">todo</button>
                                <button className="button">inprogres</button>
                                <button className="button" onClick={handleCompleted} >completed</button>
                            </div>)
                        }
                        )}
                </div>
            </div>
            <div className="todo">
                <span>inprogres</span>
                <div className="inprogresBody"></div>
            </div>
            <div className="todo">
                <span>completed</span>
                <div className="complectedBody">
                </div>
            </div>
        </div>
    )
};














