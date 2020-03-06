import { Component, OnInit } from '@angular/core';
import { simulation4 } from './simulation4.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SimulationService } from '../simulation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simulation4',
  templateUrl: './simulation4.component.html',
  styleUrls: ['./simulation4.component.css']
})
export class Simulation4Component implements OnInit {
  simulation4:simulation4;
  response:Observable<any>;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: SimulationService) { this.simulation4 = new simulation4();}

  ngOnInit(): void {
  }
  getSimulation4(form:NgForm){
    this.simulation4 = form.value;
    this.service.post4(this.simulation4).subscribe(
    response => {
    this.router.navigateByUrl("/result/"+response);
    this.service.data=response;
    });
  }
}
