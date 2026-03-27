import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandService } from '../../services/demand.service';
import { FiltersComponent } from '../filters/filters';
import { StatusCounterComponent } from '../status-counter/status-counter';
import { DemandCardComponent } from '../demand-card/demand-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FiltersComponent,
    StatusCounterComponent,
    DemandCardComponent,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  constructor(public demandService: DemandService) {}
}