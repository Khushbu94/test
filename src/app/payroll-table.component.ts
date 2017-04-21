import { Component } from '@angular/core';
import { EmployeePayrollService } from './employee-payroll.service';

@Component({
  moduleId: module.id,
  selector: 'payroll-table',
  templateUrl: 'payroll-table.component.html',
  providers: [EmployeePayrollService]
})
export class PayrollTableComponent  {
    name = 'HR Management'; 

    currentEmployee: any = {};

	constructor(private payrollService: EmployeePayrollService) { 
	}


  Payroll: any[] = this.payrollService.getEmployees();

  setCurrentEmployee(index: any) {
  	console.log('hi')
  	this.currentEmployee = this.Payroll[index];
  }

  setEditingEmployee(index: number) {
  	console.log(index);
  	this.payrollService.setEditingEmployee(index);
  }
  deletePayroll(index: number){

         this.payrollService.deletePayroll(index);

         }


 }

//# sourceMappingURL=payroll-table.component.js.map