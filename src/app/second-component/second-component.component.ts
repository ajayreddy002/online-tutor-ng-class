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
