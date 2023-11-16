import { EmployeeType } from "../type";

export class ApiHelper {
  getDataAsync = async () : Promise<EmployeeType[]> => {
    const response = await fetch('http://localhost:3000/employees');
    return await response.json();
  }

}