
import { useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { ChildrenType, EmployeeType } from '../type';

const CreateEmployee = () => {
    const [employList, setEmployList] = useState<EmployeeType[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [age, setAge] = useState(0);
    const [childList, setChildList] = useState<ChildrenType[]>([]);
    const [childName, setChildName] = useState('');
    const [childGender, setChildGender] = useState('');
    const [addBtnTest, setAddBtnTest] = useState('Add Employee');
    const selectedIndex = useRef(-1);


    const addEmployee = () => {
        //1. Check if it is editing or not
        if (!isEditing) {
            setEmployList(emp => [...emp, { fName: firstName, lName: lastName, age: age, children: [{ fullName: childName, gender: childGender } ] }]);
            //setChildList( [{ fullName: childName, gender: childGender }]);

              // setEmployList(emp => [...emp, { fName: firstName, lName: lastName, age: age, children:  [{ fullName: childName, gender: childGender }] }]);
            //setChildList(c => [...c, { fullName: childName, gender: childGender }])

        } else {
            //2. Change text to add
            setIsEditing(false);
            setAddBtnTest('Add Employee');

            //3. Get the edited employee
            const editedEmployee = employList.find((_, i) => i === selectedIndex.current)!;

            //4. Display edited employee
            editedEmployee.fName = firstName;
            editedEmployee.lName = lastName;
            editedEmployee.age = age;
        }
        // 5. Reset input box
        setFName('');
        setLName('');
        setAge(0);
        setChildName('');
        setChildGender('');
    }

    const deleteEmployee = (index: Number) => {
        const newEmpList = employList.filter((_, i) => i !== index);
        setEmployList(newEmpList);
        const newChildList = childList.filter((_, i) => i !== index);
        setChildList(newChildList);
    }

    const editEmployee = (e: any) => {
        //a. Prevent default
        e.preventDefault();
        //1. Change add button text to update & is editing
        setAddBtnTest('Update Employee');
        setIsEditing(true);
        //2. Get the id of the clicked employee on the list.
        const index = Number(e.target.value);
        //Map to current index
        selectedIndex.current = index;
        //3. Check the list of employees 
        const selectedEmployee = employList.find((_, i) => i ===index)!;
        //4. display found employee
        setFName(selectedEmployee.fName);
        setLName(selectedEmployee.lName);
        setAge(selectedEmployee.age);

    }

    const saveEmployee = () => {

    }

    return (
        <div>
            <h2>Add Employee list</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name </Form.Label>
                    <Form.Control
                        value={firstName}
                        type="text"
                        placeholder="Your first name"
                        onChange={(e) => setFName(e.target.value)} />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control
                        value={lastName}
                        type="text"
                        placeholder="Your last name"
                        onChange={(e) => setLName(e.target.value)} />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Your Age </Form.Label>
                    <Form.Control
                        value={age}
                        type="text"
                        placeholder="Your age"
                        onChange={(e) => setAge(Number(e.target.value))} />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Child Name </Form.Label>
                    <Form.Control
                        type="text"
                        value={childName}
                        placeholder="Child's Full Name" onChange={(e) => setChildName(e.target.value)} /><br />
                    <Form.Label>Child's Gender </Form.Label>
                    <Form.Control
                        type="text"
                        value={childGender}
                        placeholder="Child's Gender" onChange={(e) => setChildGender(e.target.value)} />
                </Form.Group>
            </Form>
            <br />
            <Button variant="primary" onClick={addEmployee}>{addBtnTest}</Button>{' '}
            <Button variant="primary" onClick={saveEmployee}>Save Employees</Button>{' '}
            <br />
            {
                employList.length > 0 ? (
                    employList.map((emp, index) => (
                        <div key={index}>
                            <Row>
                                <br />
                                <Col>First name: {emp.fName}</Col>
                                <Col>Last name: {emp.lName}</Col>
                                <Col>Your Age: {emp.age}</Col><br />
                              
                                  <Col>----- Your Children -----</Col>
                               {emp.children.map((child, i) => (
                                    <div key={i}>
                                        <Row> Name: {child.fullName}</Row>
                                        <Row>Gender: {child.gender}</Row>
                                    </div>
                                ))
                                }  

                                <button onClick={() => deleteEmployee(index)}>Delete</button> { }
                                <button value={index} onClick={(e) => editEmployee(e)}>Edit</button>
                            </Row>
                         
                        </div>

                    ))
                ) : (
                    <div> Please add Employee to the list </div>
                )
            }
             
          <br /><br />
        </div>
    )
}

export default CreateEmployee
