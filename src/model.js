import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function Example(props) {
  
  const textRef=useRef();
  const descRef=useRef();

  const handleSave=()=>{
    let text=textRef.current.value
    setShow(false)
    let desc=descRef.current.value  
    props.setTodoData({text:text,desc:desc})
  }

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  
  const handleShow = () => {setShow(true)};
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="plz enter title"
                autoFocus
                ref={textRef}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} ref={descRef}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>      
    </>
  );
};



