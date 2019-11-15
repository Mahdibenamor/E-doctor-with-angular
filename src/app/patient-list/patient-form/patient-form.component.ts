import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientsService} from '../../service/patients.service';
import {Router} from '@angular/router';
import {Patient} from '../../models/patient.model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  PatientForm: FormGroup;

  constructor( private  formbuilder :FormBuilder ,private PatientsService :PatientsService,
               private router :Router ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.PatientForm = this.formbuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }
  onSavePatient() {
    const name = this.PatientForm.get('name').value;
    const lastname = this.PatientForm.get('lastname').value;
    const newPatient = new Patient(name,lastname);
    this.PatientsService.createNewPatient(newPatient);
    this.router.navigate(['/patients']);
  }


}
