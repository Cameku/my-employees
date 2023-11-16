import { useEffect, useState } from 'react'
import { ApiHelper } from '../helpers/ApiHelper'
import { EmployeeType } from '../type';
import { Container } from 'react-bootstrap';
import EmployeeModal from '../components/EmployeeModal';
import EmployeeCard from '../components/EmployeeCard';

const Home = () => {

  const[empDetails, setEmpDetails] = useState<EmployeeType[]>([]);


  const apiHelper = new ApiHelper();

  const getData = async () => {
    const empData = await apiHelper.getDataAsync();
    setEmpDetails(empData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Welcome Home</h1>
    {
      empDetails?.length > 0 ? (
        empDetails.map((employee, index) => (
          <Container key={index}>
            <EmployeeCard fName={employee.fName} lName={employee.lName} age={employee.age} children={employee.children}  />
          </Container>
        ))
      ) : (
        <div>Coming soon</div>
      )
    }
    </div>
  )
}

export default Home
