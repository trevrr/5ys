export interface Problem {
  id: string;
  description: string;
  whys: Why[];
  createdAt: Date;
  rootCause?: RootCauseCategory;
  correctiveAction?: CorrectiveAction;
}

export interface CorrectiveAction {
  description: string;
  responsiblePerson: string;
  startDate: string;
  completionDate: string;
}

export interface Why {
  id: string;
  question: string;
  answer: string;
  level: number;
}

export type RootCauseCategory = 
  | 'Human Error'
  | 'Equipment Malfunction'
  | 'Process Variation'
  | 'Supplier Issues'
  | 'External Factors';