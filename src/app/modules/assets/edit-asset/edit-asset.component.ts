import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assets } from '@app/shared/modal/assest';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.scss'],
})
export class EditAssetComponent implements OnInit {
  formData!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditAssetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Assets,
  ) {
    this.formData = this.formBuilder.group({
      atmName: ['', Validators.required],
      manufacturer: ['', Validators.required],
      type: ['', Validators.required],
      serialNumber: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formData.patchValue(this.data);
  }

  isHasError(controlName: string): boolean {
    return (
      this.formData.controls[controlName].errors?.['required'] &&
      this.formData.controls[controlName].dirty
    );
  }

  onCloseDialog() {
    const message = 'edit';
    const formData = this.formData.value;
    return { message, formData };
  }
}
