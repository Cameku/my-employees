
import { Card } from 'react-bootstrap'
import { EmployeeType } from '../type'

const EmployeeCard = (employeeInfo : EmployeeType ) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>......Employee Details .......</Card.Title>
      <Card.Text>
       Name: <b>{employeeInfo.fName} {employeeInfo.lName}</b> <br />
       Age: <b>{employeeInfo.age}</b>
      
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default EmployeeCard
