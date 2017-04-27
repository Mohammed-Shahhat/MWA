import { Component } from '@angular/core';
import {
  FormGroup, FormControl, Validators,
  FormBuilder, FormArray
} from "@angular/forms";

import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'data-driven',
  templateUrl: 'addpost.component.html'
})
export class AddPostComponent {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private formService: FormserviceService
  ) {

    this.myForm = formBuilder.group({
      
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

 



}
