import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  fristName = "First name"
  firstData = 'Temporary data';
  firstNgModel = '';
  isNameCreated = false;
  id = 20;
  isDisabled = false;
  
  students = [
    {id:1, name: 'Ajay', email: 'ajay@gmail.com'},
    {id:1, name: 'Ajay 1', email: 'ajay1@gmail.com'},
    {id:1, name: 'Ajay 2', email: 'ajay2@gmail.com'},
    {id:1, name: 'Ajay 3', email: 'ajay3@gmail.com'},
    {id:1, name: 'Ajay 4', email: 'ajay4@gmail.com'},
  ]

  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
    }, 2000)
  }

  ngOnInit(): void {
  }
  createName() {
    this.isNameCreated = true;
  }
  onInputChange(event: any) {
    this.fristName = event.target.value;
  }
}
