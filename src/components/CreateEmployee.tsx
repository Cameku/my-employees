
import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { ChildrenType, EmployeeType } from '../type';

const CreateEmployee = () => {
    const [employList, setEmployList] = useState<EmployeeType[]>([]);
    const [id, setId] = useState(0);
    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [age, setAge] = useState(0);
    const [child, setChild] = useState<ChildrenType[]>([]);

    const addEmployee = () => {
      setEmployList(emp => [...emp, {id: id, fName: firstName, lName: lastName, age: age, children: child}])
    }

    return (
        <div>
            <h2>Add Employee list</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Your first name" 
                    onChange={(e) => setFName(e.target.value)}/>
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Your last name" 
                    onChange={(e) => setLName(e.target.value)}/>
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Your Age </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Your age"  onChange={(e) => setAge(Number(e.target.value))}/>
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Children </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Children"  />
                </Form.Group>
            </Form>
            <br />
            <Button variant="primary" onClick={addEmployee}>Add Employee</Button>{' '}
            <br />
            {
                employList.length > 0 ? (
                    employList.map((emp, index) => (
                        <div key={index}>
                            <Row>
                                <br/>
                                <Col>First name: {emp.fName}</Col>
                                <Col>Last name: {emp.lName}</Col>
                                <Col>Your Age: {emp.age}</Col>
                                <br/>
                               <button>Delete</button> { }  <button>Edit</button>
                            </Row>
                        </div>
                    ))
                ) : (
                    <div> Please add Employee to the list </div>
                )
            }
        </div>
    )
}

export default CreateEmployee
