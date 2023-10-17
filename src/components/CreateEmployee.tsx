import React from 'react'
import { Form } from 'react-bootstrap'

const CreateEmployee = () => {
    
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Your first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Your last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Your age" />
                </Form.Group>
            </Form>
            <br />
        </div>
    )
}

export default CreateEmployee
