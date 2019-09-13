import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  kevinForm: FormGroup;
  isValid = false;
  isSubmitted = false;

  constructor(private http: HttpClient) {}

  postMail(postData: {Name: string, Email: string, Body: string}) {
    this.http.post(
      'https://us-central1-sendgridmail-228a0.cloudfunctions.net/sendMail',
      postData,
      { responseType: 'text' }
    ).subscribe(response => { this.isSubmitted = true; });
  }

  onSubmit() {
    this.kevinForm.reset();
    this.postMail({
      Name: this.kevinForm.value.name,
      Email: this.kevinForm.value.email,
      Body: this.kevinForm.value.description
    });
  }

  ngOnInit() {
    this.kevinForm = new FormGroup({
      name: new FormControl(null,
        Validators.required),
      email: new FormControl(null,
        [Validators.email,
        Validators.required]),
      description: new FormControl(null,
        Validators.required)
    });

    this.kevinForm.statusChanges.subscribe(
      (value) => {
        if ( value === 'VALID' ) {
          this.isValid = true;
        } else {
          this.isValid = false;
        }
      }
    );
  }
}
