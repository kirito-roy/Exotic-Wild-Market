import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Msg } from './service/msg/msg.service';
import { firstValueFrom } from 'rxjs';
import { Test1Service } from './service/apis/test1.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'PawPawsy';
  studentForm: FormGroup; // No longer optional
  // enter some student data
  maxFileSize = 200 * 1024; // 200 KB

  students: any[] = [];
  classes: any[] = [
    { label: 'Class 1', value: 'c1' },
    { label: 'Class 2', value: 'c2' },
    { label: 'Class 3', value: 'c3' },
    { label: 'Class 4', value: 'c4' },
    { label: 'Class 5', value: 'c5' },
    { label: 'Class 6', value: 'c6' },
    { label: 'Class 7', value: 'c7' },
    { label: 'Class 8', value: 'c8' },
    { label: 'Class 9', value: 'c9' },
    { label: 'Class 10', value: 'c10' },
    { label: 'Class 11', value: 'c11' },
    { label: 'Class 12', value: 'c12' },

  ];

  constructor(private msgService: Msg, private fb: FormBuilder , private api :Test1Service) {
    // Initialize the FormGroup to avoid undefined
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      roll: ['', Validators.required],
      // create phone number pattern
      phoneNumber: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^[0-9]*$')]],
      className: ['', Validators.required],
      img : ["", Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    this.showData(); // Add fetched student data to the list.
  }
  async showData(){
    const responce = await firstValueFrom(this.api.getStudent());
    console.log(responce);
    this.students=responce.data;
  }
  convertToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.size <= this.maxFileSize) {
        this.convertToBase64(file).then(base64 => {
          this.studentForm.patchValue({ img: base64 });
        }).catch(error => {
          console.error('Error converting file to base64:', error);
          this.msgService.showError('Error converting file to base64.');
        });
      } else {
        this.msgService.showWarning('File size exceeds the limit of 200 KB');
        this.studentForm.patchValue({ img: '' });
      }
    }

  }
  async onSubmit(): Promise<void> {
    if (this.studentForm.valid) {
      const newStudent = this.studentForm.value;
      // Here you would send the newStudent to your API
      const res =await firstValueFrom( this.api.setStudent(newStudent));
      this.msgService.showSuccess(res.message);
      this.showData();
    } else {
      this.msgService.showError('Please fill out all fields correctly');
    }
  }
}
