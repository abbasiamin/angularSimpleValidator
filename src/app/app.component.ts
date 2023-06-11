import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'SimpleValidator';
  myForm! :FormGroup;
  firstName='';


  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl([
        Validators.required
      ])
    });
  }

  submitForm() {
    console.log('form submited!');
    if (this.myForm.valid) {
      this.callMyAPI();
    }
    else {
    }
  }

  txtChange(){
    console.log('textbox changed!');
    if(this.firstName.length>4){
      this.callMyAPI();
    }
  }

  callMyAPI() {
    window.alert('سرویس اجرا شد!');
  }

}
