import React from 'react';
import { Problem } from '../types/analysis';
import { HistoryItem } from './HistoryItem';

interface HistoryListProps {
  problems: Problem[];
  onSelect: (problem: Problem) => void;
  onDelete: (id: string) => void;
}

export function HistoryList({ problems, onSelect, onDelete }: HistoryListProps) {
  if (problems.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No previous analyses found. Start by describing a problem above.
      </div>
    );
  }

  return (
    <div className="mb-8 animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Previously Completed Analyses
      </h2>
      <div className="space-y-4">
        {problems.map((problem) => (
          <HistoryItem
            key={problem.id}
            problem={problem}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}