import {Component, OnDestroy, OnInit} from '@angular/core';
import {Patient} from '../models/patient.model';
import {Subscription} from 'rxjs';
import {PatientsService} from '../service/patients.service';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({

  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit ,OnDestroy {

  Patients: Patient[];
  PatientSubscription: Subscription;

  constructor( private PatientsService: PatientsService, private router: Router,private authService: AuthService
  , private  http : HttpClient){}
  ngOnInit() {
    this.PatientSubscription = this.PatientsService.PatientsSubject.subscribe(
      (Patients: Patient[]) => {
        this.Patients = Patients;
        console.log(this.Patients)
      }
    );
    this.PatientsService.getPatients();
    this.PatientsService.emitPatients();

  }

  onNewPatient() {
    this.router.navigate(['/patients', 'new']);
  }
  onDeletePatient(Patient: Patient) {
    this.PatientsService.removePatient(Patient);
  }

  onViewPatient(id) {
      this.router.navigate(['/patients', 'view', String(id)]);
  }

  ngOnDestroy() {
    this.PatientSubscription.unsubscribe();
  }

}
