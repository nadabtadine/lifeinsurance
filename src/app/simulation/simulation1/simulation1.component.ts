import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { simulation1 } from './simulation1.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SimulationService } from '../simulation.service';


@Component({
  selector: 'app-simulation1',
  templateUrl: './simulation1.component.html',
  styleUrls: ['./simulation1.component.css']
})
export class Simulation1Component implements OnInit {

  simulation1:simulation1;
  response:Observable<any>;
  showFields: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: SimulationService) { this.simulation1 = new simulation1();
  }

  ngOnInit(): void {
  }

  getSimulation1(form:NgForm){
    this.simulation1 = form.value;
    this.service.post1(this.simulation1).subscribe(
    response => {
    this.router.navigateByUrl("/result/"+response);
   this.service.data=response;
    });
  }

  change(cancer){
      if(cancer.value === "true"){
        this.showFields = true;
      } else {
        this.showFields = false;
      }
  }

}
