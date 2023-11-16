export type EmployeeType = {
   // id: number; 
    fName: string;
    lName: string;
    age: number;
    children: ChildrenType[];
}

export type ChildrenType = {
    fullName: string; 
    gender: string;
}