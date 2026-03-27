export type OTStatusType = 'Pending' | 'Refer Back' | 'Resubmit' | 'Approve' | 'Reject';
export type SRStatusType = 'Yet to Start' | 'SR Created';

export interface Demand {
  trackingNo: string;
  skills: string[];
  createdDate: Date;
  otStatus: OTStatusType;
  srStatus: SRStatusType;
  billingStartDate: Date | null;
}

export type CompletionStatus = 'Completed' | 'InProgress' | 'Pending';

export function getCompletionStatus(demand: Demand): CompletionStatus {
  if (demand.otStatus === 'Approve' && demand.srStatus === 'SR Created') {
    return 'Completed';
  } else if (demand.otStatus === 'Approve' && demand.srStatus === 'Yet to Start') {
    return 'InProgress';
  }
  return 'Pending';
}

export function getStatusColor(demand: Demand): string {
  const status = getCompletionStatus(demand);
  if (status === 'Completed') return 'green';
  if (status === 'InProgress') return 'amber';
  return 'red';
}