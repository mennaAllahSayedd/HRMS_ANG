export interface ILeave {
  id: number;
  employeeId: number;
  employeeName?: string;
  startDate: string;
  endDate: string;
  type: string;
  status: string;
  reason?: string;
}
