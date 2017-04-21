import { Injectable } from '@angular/core';



@Injectable()
export class EmployeePayrollService {
	static Payroll: any[] = [];
	static currentlyEditing = -1;

	constructor() {
		localStorage.clear();
		EmployeePayrollService.Payroll = JSON.parse(localStorage.getItem('Payroll'));
		if (EmployeePayrollService.Payroll === null) {
			EmployeePayrollService.Payroll = [];
		}
	}

	getCurrentlyEditing() {
		return EmployeePayrollService.currentlyEditing;
	}

	addEmployee(emp: any){
      EmployeePayrollService.Payroll.push(emp);
      console.log(EmployeePayrollService.Payroll);
      localStorage.setItem('Payroll', JSON.stringify(EmployeePayrollService.Payroll));
	}

	getEmployees() {
	return EmployeePayrollService.Payroll;
	}

	setEditingEmployee(index: number) {
		EmployeePayrollService.currentlyEditing = index;
	}

	deletePayroll(index: number){

         EmployeePayrollService.Payroll.splice(index, 1);

		}


	}

	

