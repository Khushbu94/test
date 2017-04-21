import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent }  from './employee-table.component';
import { PayrollComponent }  from './payroll.component';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { FormComponent }  from './form.component';
import { PayrollTableComponent }  from './payroll-table.component';
import { ModalComponent } from './modal.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, EmployeeComponent, FormComponent, PayrollComponent, PayrollTableComponent, ModalComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
