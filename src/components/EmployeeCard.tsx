
import { Card } from 'react-bootstrap'
import { EmployeeType } from '../type'

const EmployeeCard = (employeeInfo : EmployeeType ) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>......Employee Details .......</Card.Title>
      <Card.Text>
       <p>First Name: <b>{employeeInfo.fName}</b></p>
       <p>Last Name: <b>{employeeInfo.lName}</b></p>
       <p>Age: <b>{employeeInfo.age}</b></p>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default EmployeeCard
