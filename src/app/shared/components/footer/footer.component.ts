import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('example@gmail.com', [Validators.minLength(4), Validators.maxLength(15)]);
    // this.emailField.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
  }

  ngOnInit() {
  }
  sendMail() {
    if (this.emailField.valid) {
      console.log();
    }
  }
}
