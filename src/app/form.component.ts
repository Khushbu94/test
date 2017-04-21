import { Component, ViewChild, DoCheck } from '@angular/core'
import { EmployeeService } from './employee.service'

@Component({
  moduleId: module.id,
  selector: 'employee-form',
  templateUrl: 'form.component.html',
  providers: [EmployeeService]
})
export class FormComponent implements DoCheck { 
	constructor(private empService: EmployeeService) {
		this.getEditInfo();
	}

	ngDoCheck() {
		console.log('changed');
		this.getEditInfo();
	}

	name = 'HR Management'; 
	currentlyEditingEmployee: any;

	onSubmit(f: any) {
		if (this.empService.getCurrentlyEditing() > -1) {
			this.empService.setEditingEmployee(-1);
		} else {
			console.log('hi');
			this.empService.addEmployee(f.value);
		}
	}

	validate(emp: any) {
		if (!emp.name) {
			return false;
		}
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(emp.email);
	}

	getEditInfo() {
		if (this.empService.getCurrentlyEditing() > -1) {
			this.currentlyEditingEmployee = this.empService.getEmployees()[this.empService.getCurrentlyEditing()];
		} else {
			this.currentlyEditingEmployee = {};
		}
	}




}
