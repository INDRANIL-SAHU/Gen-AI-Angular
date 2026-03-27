import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demand, getCompletionStatus, getStatusColor } from '../../models/demand.model';

@Component({
  selector: 'app-demand-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demand-card.html',
  styleUrls: ['./demand-card.css'],
})
export class DemandCardComponent {
  @Input() demand!: Demand;

  get statusColor(): string {
    return getStatusColor(this.demand);
  }

  get completionStatus(): string {
    return getCompletionStatus(this.demand);
  }

  get displayBillingDate(): string {
    if (!this.demand.billingStartDate) {
      return 'N/A';
    }
    return new Date(this.demand.billingStartDate).toLocaleDateString();
  }

  get displayCreatedDate(): string {
    return new Date(this.demand.createdDate).toLocaleDateString();
  }
}