
import { Card } from 'react-bootstrap'
import { EmployeeType } from '../type'

const EmployeeCard = (employeeInfo : EmployeeType ) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>......Employee Details .......</Card.Title>
      <Card.Text>
       <p>Name: <b>{employeeInfo.fName} {employeeInfo.lName}</b></p>
       <p>Age: <b>{employeeInfo.age}</b></p>
      
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default EmployeeCard
