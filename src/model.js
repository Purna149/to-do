import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Example(props) {
  
  const titleRef=useRef();
  const descRef=useRef();

  const handleSave=()=>{
    let title=titleRef.current.value
    let desc=descRef.current.value  
    props.setTodoData({title:title,desc:desc,status:'todo',id:props.id})
    setShow(false)
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
                ref={titleRef}
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



