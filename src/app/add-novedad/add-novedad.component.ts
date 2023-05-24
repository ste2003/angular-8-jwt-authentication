import { Component, OnInit } from '@angular/core';
import { NovedadService } from '../_services/novedad.service';

@Component({
  selector: 'app-add-novedad',
  templateUrl: './add-novedad.component.html',
  styleUrls: ['./add-novedad.component.css']
})
export class AddNovedadComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private novedadService: NovedadService) { }

  ngOnInit() {
    console.log("on init add-novedad");
  }

  onSubmit() {
    console.log("on submit", this.form);
    this.novedadService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(this.isSignUpFailed);
      console.log(this.isSuccessful);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.log(this.isSignUpFailed);
      console.log(this.isSuccessful);
      }
      
    );
  }
}
