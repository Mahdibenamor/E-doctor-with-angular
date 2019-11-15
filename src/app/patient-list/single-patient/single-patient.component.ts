import { Component, OnInit } from '@angular/core';
import {Patient} from '../../models/patient.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../../service/patients.service';
import * as Chart from 'Chart.js';
import {getContext} from '@angular/core/src/render3/discovery_utils';

//declare var $:any;

@Component({

  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.scss']
})
export class SinglePatientComponent implements OnInit {

  Patient :Patient ;
  constructor( private route: ActivatedRoute ,private router: Router,
               private PatientService: PatientsService ) {

  }

  ngOnInit() {
    this.Patient = new Patient('', '');
    const id = this.route.snapshot.params['id'];

    this.PatientService.getSinglePatient(parseInt(id)).then(
      (Patient: Patient) => {
       this.Patient = Patient;
        console.log(this.Patient)
      })

    // var ctx = document.
    // getElementById('myChart').
    // getContext('2d');

  /*  var ctx = document.getElementById('myChart');
    // eslint-disable-next-line no-unused-vars
    ctx.getContext('2');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })*/
  }

  onBack() {
    this.router.navigate(['/patients']);
  }
/* <div class="col-xs-12">
    <h1>{{ Patient.name }}</h1>
    <h3>{{ Patient.lastename }}</h3>
    <button class="btn btn-default" (click)="onBack()">Retour</button>
  </div>*/

}
