import React from "react";
import Example from './model'
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './todo.css';
import { Button } from "react-bootstrap";

export const Data = () => {

    const [todoData, setTodoData] = useState([]);
    const [status,setStatus]=useState([]);
    const [progres,setProgres] = useState([])

    const onTodoAdd = (item) => {
        setTodoData([...todoData, item])
    };
    
    const Options=()=>{
        return(
            <Dropdown className="dropDown">
                                            <Dropdown.Toggle></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item> <Button className="btn-edit" color="info" onClick={() => handleEdit}>Edit</Button> </Dropdown.Item>
                                                <Dropdown.Item> <Button className="btn-delete" color="info" onClick={handleDelete}>Delete</Button></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
        )
    }

    const handleEdit = (i) => {       
    };
    const handleDelete = index => {
        const delect = [...todoData];
        delect.splice(index, 1);
        setTodoData(delect);
    };

    const handleinprogress=(ind)=>{
        setProgres(todoData)
        const delect = [...todoData];
        delect.splice(ind, 1);
        setTodoData(delect);
    };

    const handleCompleted = (ite) => {
        console.log(ite)
        const spread = [...todoData];
        setStatus(spread);
        console.log(spread)
        const delect = [...todoData];
        delect.splice(ite,1);
        setTodoData(delect);
    };
    return (
        <div className="data">
            <div className="todo">
                <span>To Do</span> <div className="buttonBody">
                    <Example setTodoData={onTodoAdd} /></div>
                <div className="bodys">
                    {
                        todoData.map((e, ind) => {
                            return (<div className="addtodo" key={ind}>
                                <div className="titleBody">
                                    <div>{e.text}</div>
                                    <div className="dropDownBody">
                                        <Options/>
                                    </div>
                                </div>
                                <br/>
                                <div>{e.desc}</div>
                                <br/>
                                {/*<button className="button">todo</button> */}
                                <button className="button" onClick={handleinprogress}>inprogres</button>
                                <button className="button" onClick={handleCompleted} >completed</button>
                            </div>)
                        }
                        )}
                </div>
            </div>
            <div className="todo">
                <span>inprogres</span>
                <div className="bodys">
                {
                    progres.map((v,i)=>{
                        return(
                            <div className="addtodo" key={i}>
                                <div> {v.text} <span Options={Options}></span></div>
                                <div> {v.desc} </div>
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
                    status.map((v,i)=>{
                        return(
                            <div className="addtodo" key={i}>
                                <div> {v.text}</div>
                                <div>{v.desc}</div>
                            </div>
                        )
                    })
                   }
                </div>
            </div>
        </div>
    )
};














