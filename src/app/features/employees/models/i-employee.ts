export interface IEmployee {
  employeeNumber: number;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  age: number;
  jobTile: string | null;
  departmentId: number;
  managerId: number | null;
}