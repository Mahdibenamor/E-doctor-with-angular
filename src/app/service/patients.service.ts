import { Injectable } from '@angular/core';
import {Patient} from '../models/patient.model';
import {Subject, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  Patients: Patient[] = [];
  PatientsSubject = new Subject<Patient[]>();

  constructor() {
    this.getPatients();
  }




  emitPatients() {
    this.PatientsSubject.next(this.Patients);
  }



  savePatients() {
    firebase.database().ref('/patients').set(this.Patients);
  }



  getPatients() {
    firebase.database().ref('/patients')
      .on('value', (data: DataSnapshot) => {
          this.Patients = data.val() ? data.val() : [];
          this.emitPatients();
        }
      );
  }



  getSinglePatient(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/¨Patients/' + id).once('value').then(
          (data) => {
            resolve(data
            );
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPatient(newPatient:Patient) {
    this.Patients.push(newPatient);
    this.savePatients();
    this.emitPatients();
  }

  removePatient(Patient: Patient) {
    const PatientIndexToRemove = this.Patients.findIndex(
      (PatientEl) => {
        if(PatientEl === Patient) {
          return true;
        }
      }
    );
    this.Patients.splice(PatientIndexToRemove, 1);
    this.savePatients();
    this.emitPatients();
  }
}


