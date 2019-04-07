import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: ServicesService
  ) { }

  ngOnInit() {
    this.register = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.register.value)
    // this.service.register(this.register.value).subscribe(result => {

    // })
  }

  clear() {
    this.register.reset();
  }

}
