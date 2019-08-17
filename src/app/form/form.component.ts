import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  kevinForm: FormGroup;

  onSubmit() {
    console.log(this.kevinForm);
  }

  ngOnInit() {
    this.kevinForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null)
    });
  }
}
