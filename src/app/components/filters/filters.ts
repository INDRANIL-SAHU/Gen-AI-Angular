import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemandService } from '../../services/demand.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.html',
  styleUrls: ['./filters.css'],
})
export class FiltersComponent implements OnInit {
  searchQuery: string = '';
  selectedOTStatus: string = 'All';
  selectedSRStatus: string = 'All';

  otStatusOptions = [
    'All',
    'Pending',
    'Refer Back',
    'Resubmit',
    'Approve',
    'Reject',
  ];
  srStatusOptions = ['All', 'Yet to Start', 'SR Created'];

  constructor(private demandService: DemandService) {}

  ngOnInit(): void {
    // Initialize filters from service
    this.demandService.setSearchQuery('');
    this.demandService.setOTStatusFilter('All');
    this.demandService.setSRStatusFilter('All');
  }

  onSearchChange(value: string): void {
    this.searchQuery = value;
    this.demandService.setSearchQuery(value);
  }

  onOTStatusChange(value: string): void {
    this.selectedOTStatus = value;
    this.demandService.setOTStatusFilter(value);
  }

  onSRStatusChange(value: string): void {
    this.selectedSRStatus = value;
    this.demandService.setSRStatusFilter(value);
  }
}