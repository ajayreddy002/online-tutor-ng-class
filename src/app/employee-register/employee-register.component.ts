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

}
