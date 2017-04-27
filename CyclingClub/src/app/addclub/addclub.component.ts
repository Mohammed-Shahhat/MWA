import { Component } from '@angular/core';
import {
  FormGroup, FormControl, Validators,
  FormBuilder, FormArray
} from "@angular/forms";

import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'data-driven',
  templateUrl: 'addclub.component.html'
})
export class AddclubComponent {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private formService: FormserviceService
  ) {

    this.myForm = formBuilder.group({
      'name': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'post': ['', [Validators.required]]
    });




    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );

  }

  onSubmit(form) {
    let coords;
    navigator.geolocation.getCurrentPosition((position)=>{
      coords = {
        lat:position.coords.latitude,
        lng:position.coords.longitude
      };
      form.value.coords = coords;
      console.log(form.value);
      this.formService.submitPost(form.value).subscribe((data) => {
    });
    console.log(form.value);
      console.log(coords);
    },(err)=>{
      console.log(err);
    })
    
  }

  getmyData() {
    this.formService.getData('https://jsonplaceholder.typicode.com/users/1').subscribe(
      response => {
        var userObject = response.json();
        this.myForm.controls['name'].setValue(userObject.name, { onlySelf: true });
        this.myForm.controls['state'].setValue(userObject.state, { onlySelf: true });
        this.myForm.controls['city'].setValue(userObject.city, { onlySelf: true });
        this.formService.getData('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe(
          innerResponse => {
            var myvalue = innerResponse.json()[0];
            this.myForm.controls['description'].setValue(myvalue.body);
          },
          innerError => console.log(innerError)
        );
      },
      error => console.log(error)
    );

  }



}
