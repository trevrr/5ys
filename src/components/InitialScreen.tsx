import React from 'react';
import { Problem } from '../types/analysis';
import { ProblemForm } from './ProblemForm';
import { Guidance } from './Guidance';
import { HistoryList } from './HistoryList';

interface InitialScreenProps {
  problems: Problem[];
  onSubmit: (description: string) => void;
  onHistorySelect: (problem: Problem) => void;
  onDeleteAnalysis: (id: string) => void;
}

export function InitialScreen({ 
  problems, 
  onSubmit, 
  onHistorySelect,
  onDeleteAnalysis
}: InitialScreenProps) {
  return (
    <>
      <ProblemForm onSubmit={onSubmit} />
      <Guidance step="problem" />
      <HistoryList 
        problems={problems} 
        onSelect={onHistorySelect}
        onDelete={onDeleteAnalysis}
      />
    </>
  );
}