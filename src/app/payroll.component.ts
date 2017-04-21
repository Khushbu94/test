import { Component, DoCheck, ViewChild} from '@angular/core';
import { EmployeeService } from './employee.service'
import { EmployeePayrollService } from './employee-payroll.service';


@Component({
  moduleId: module.id,
  selector: 'payroll',
  templateUrl: 'payroll.component.html',
  providers: [EmployeePayrollService, EmployeeService]
})
export class PayrollComponent implements DoCheck  { name = 'HR Management' ;

Employees = this.empService.getEmployees(); 

constructor(private payrollService: EmployeePayrollService, private empService: EmployeeService) {
		this.getEditInfo();
	}

	ngDoCheck() {
		console.log('changed');
		this.getEditInfo();
	}



	// name = 'HR Management'; 
	currentlyEditingPayroll: any;

	onSubmit(f: any) {
		if (this.payrollService.getCurrentlyEditing() > -1) {
			this.payrollService.setEditingEmployee(-1);
		} else {
			this.payrollService.addEmployee(f.value);
		}
	}

getEditInfo() {
		if (this.payrollService.getCurrentlyEditing() > -1) {
			this.currentlyEditingPayroll = this.payrollService.getEmployees()[this.payrollService.getCurrentlyEditing()];
		} else {
			this.currentlyEditingPayroll = {};
		}
	} 


}

		


