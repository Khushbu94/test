import { Injectable } from '@angular/core';



@Injectable()
export class EmployeeService {
	static Employees: any[] = [];
	static currentlyEditing = -1;

	constructor() {
		//localStorage.clear();
		EmployeeService.Employees = JSON.parse(localStorage.getItem('Employees'));
		if (EmployeeService.Employees === null) {
			EmployeeService.Employees = [];
		}
	}

	getCurrentlyEditing() {
		return EmployeeService.currentlyEditing;
	}

	addEmployee(emp: any){
      EmployeeService.Employees.push(emp);
      console.log(EmployeeService.Employees);
      localStorage.setItem('Employees', JSON.stringify(EmployeeService.Employees));
	}

	getEmployees() {
	return EmployeeService.Employees;
	}

	setEditingEmployee(index: number) {
		EmployeeService.currentlyEditing = index;
	}
}

