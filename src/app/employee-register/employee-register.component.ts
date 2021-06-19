import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted: boolean;
  employeesArray = [];
  viewType = 'register';
  actionType: string;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      employeeId: [''],
      employeeName: ['', Validators.required],
      designation: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern(/^[1-9]\d*(\.\d+)?$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/)]],
      gender: ['', Validators.required],
      English: [''],
      Hindi: [''],
      qualification: ['', Validators.required],
      languages: ['']
    });
    this.getEmployees()
  }
  registerEmployee() {
    if (this.registerForm.valid) {
      this.isSubmitted = false;
      if (!this.employeesArray.includes(this.registerForm.value)) {
        this.registerForm.controls.employeeId.setValue(+1);
        this.employeesArray.push(this.registerForm.value);
        localStorage.setItem('empData', JSON.stringify(this.employeesArray));
        this.registerForm.reset();
      } else {
        alert('User already exists');
      }
    } else {
      this.isSubmitted = true;
    }
  }

  getEmployees() {
    if (localStorage.getItem('empData') !== null && localStorage.getItem('empData') !== undefined) {
      this.employeesArray = JSON.parse(localStorage.getItem('empData'));
      this.viewType = 'list'
    }
  }

  editEmployee(employeeInfo) {
    this.viewType = 'register';
    this.actionType = 'Edit'
    this.registerForm.patchValue(employeeInfo);
  }

  updateEmployee() {
    this.employeesArray.map((item, index) => {
      if (item.employeeId === this.registerForm.controls.employeeId.value) {
        this.employeesArray[index] = this.registerForm.value;
      }
    });
    localStorage.setItem('empData', JSON.stringify(this.employeesArray));
    this.getEmployees();
  }
}
