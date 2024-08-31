import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  disabled: boolean = true;

  value1!: string;

  value2=null;

  value3!: string;

  value4!: string;

  value5: string = 'Disabled';
  constructor() { }
  showAlert() {
    Swal.fire({
      title: 'Hello Sumit!',
      text: 'Button Clicked',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  ngOnInit(): void {
  }

}
