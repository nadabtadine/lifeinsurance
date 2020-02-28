import { Component, OnInit } from '@angular/core';
import { simulation2 } from './simulation2.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SimulationService } from '../simulation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simulation2',
  templateUrl: './simulation2.component.html',
  styleUrls: ['./simulation2.component.css']
})
export class Simulation2Component implements OnInit {
  simulation2:simulation2;
  response:Observable<any>;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: SimulationService) { this.simulation2 = new simulation2();}

  ngOnInit(): void {
  }
  getSimulation2(form:NgForm){
    this.simulation2 = form.value;
    this.service.post2(this.simulation2).subscribe(
    response => {
    this.router.navigateByUrl("/result/"+response);
    this.service.data=response;
    });
  }
}
