import { useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { EmployeeType } from '../type';

const EmployeeModal = ({employee}: {employee: EmployeeType[]}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Employee List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>First Name: {}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeModal
