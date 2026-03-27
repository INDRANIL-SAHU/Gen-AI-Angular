import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';
import { Demand, getCompletionStatus } from '../models/demand.model';

@Injectable({
  providedIn: 'root',
})
export class DemandService {
  // Signals for state management
  private demandsSignal = signal<Demand[]>([
    {
      trackingNo: 'TRK-001',
      skills: ['Java', 'Spring Boot', 'SQL'],
      createdDate: new Date('2026-03-01'),
      otStatus: 'Approve',
      srStatus: 'SR Created',
      billingStartDate: new Date('2026-03-10'),
    },
    {
      trackingNo: 'TRK-002',
      skills: ['ReactJS', 'HTML', 'CSS', 'JavaScript'],
      createdDate: new Date('2026-03-05'),
      otStatus: 'Approve',
      srStatus: 'Yet to Start',
      billingStartDate: null,
    },
    {
      trackingNo: 'TRK-003',
      skills: ['C#', '.NET', 'SQL'],
      createdDate: new Date('2026-03-10'),
      otStatus: 'Pending',
      srStatus: 'Yet to Start',
      billingStartDate: null,
    },
    {
      trackingNo: 'TRK-004',
      skills: ['PowerApps', 'PowerAutomate'],
      createdDate: new Date('2026-03-12'),
      otStatus: 'Refer Back',
      srStatus: 'Yet to Start',
      billingStartDate: null,
    },
    {
      trackingNo: 'TRK-005',
      skills: ['C', 'C++', 'Data Structures'],
      createdDate: new Date('2026-03-15'),
      otStatus: 'Resubmit',
      srStatus: 'Yet to Start',
      billingStartDate: null,
    },
  ]);

  private searchQuerySignal = signal<string>('');
  private otStatusFilterSignal = signal<string>('All');
  private srStatusFilterSignal = signal<string>('All');

  // Computed signals
  filteredDemands = computed(() => {
    const demands = this.demandsSignal();
    const searchQuery = this.searchQuerySignal().toLowerCase();
    const otFilter = this.otStatusFilterSignal();
    const srFilter = this.srStatusFilterSignal();

    return demands.filter((demand) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        demand.trackingNo.toLowerCase().includes(searchQuery) ||
        demand.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery)
        );

      // OT Status filter
      const matchesOT = otFilter === 'All' || demand.otStatus === otFilter;

      // SR Status filter
      const matchesSR = srFilter === 'All' || demand.srStatus === srFilter;

      return matchesSearch && matchesOT && matchesSR;
    });
  });

  completedCount = computed(() => {
    return this.filteredDemands().filter(
      (d) => getCompletionStatus(d) === 'Completed'
    ).length;
  });

  inProgressCount = computed(() => {
    return this.filteredDemands().filter(
      (d) => getCompletionStatus(d) === 'InProgress'
    ).length;
  });

  pendingCount = computed(() => {
    return this.filteredDemands().filter(
      (d) => getCompletionStatus(d) === 'Pending'
    ).length;
  });

  // Methods to update signals
  setSearchQuery(query: string): void {
    this.searchQuerySignal.set(query);
  }

  setOTStatusFilter(status: string): void {
    this.otStatusFilterSignal.set(status);
  }

  setSRStatusFilter(status: string): void {
    this.srStatusFilterSignal.set(status);
  }

  // Getter methods
  getDemands() {
    return this.demandsSignal();
  }
}