import { Component, OnInit } from '@angular/core';
import { simulation3 } from './simulation3.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SimulationService } from '../simulation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simulation3',
  templateUrl: './simulation3.component.html',
  styleUrls: ['./simulation3.component.css']
})
export class Simulation3Component implements OnInit {
  simulation3:simulation3;
  response:Observable<any>;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: SimulationService) {this.simulation3 = new simulation3(); }

  ngOnInit(): void {
  }
  getSimulation3(form:NgForm){
    this.simulation3 = form.value;
    this.service.post3(this.simulation3).subscribe(
    response => {
    this.router.navigateByUrl("/result/"+response);
    this.service.data=response;
    });
  }
}
