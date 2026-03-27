import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-counter.html',
  styleUrls: ['./status-counter.css'],
})
export class StatusCounterComponent {
  @Input() count!: number;
  @Input() label!: string;
  @Input() color: 'green' | 'amber' | 'red' | 'gray' = 'gray';
}