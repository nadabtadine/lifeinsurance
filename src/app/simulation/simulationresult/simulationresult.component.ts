import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-simulationresult',
  templateUrl: './simulationresult.component.html',
  styleUrls: ['./simulationresult.component.css']
})
export class SimulationresultComponent implements OnInit {

  r:number;
  constructor(private service:SimulationService) { }

  ngOnInit(): void {
    this.r=this.service.data;
  }

}
