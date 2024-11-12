import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss'],
})
export class AddAssetComponent implements OnInit {
  formData!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      atmName: ['', Validators.required],
      manufacturer: ['', Validators.required],
      type: ['', Validators.required],
      serialNumber: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  isHasError(controlName: string): boolean {
    return (
      this.formData.controls[controlName].errors?.['required'] &&
      this.formData.controls[controlName].dirty
    );
  }
  
  onCloseDialog () {
    const message = 'close';
    const formData = this.formData.value;
    return { message, formData };
  }
}
