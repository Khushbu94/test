import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  moduleId: module.id,
  selector: 'employee-table',
  templateUrl: 'employee-table.component.html',
  providers: [EmployeeService]
})
export class EmployeeComponent  { 

	name = 'HR Management'; 

	currentEmployee: any = {};

	constructor(private empService: EmployeeService) { 
	}


  Employees = this.empService.getEmployees();

  setCurrentEmployee(index: any) {
  	console.log('hi')
  	this.currentEmployee = this.Employees[index];
  }

  setEditingEmployee(index: number) {
  	console.log(index);
  	this.empService.setEditingEmployee(index);
  }

}
