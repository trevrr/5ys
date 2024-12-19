import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Problem } from '../types/analysis';
import { DeleteButton } from './DeleteButton';

interface HistoryItemProps {
  problem: Problem;
  onSelect: (problem: Problem) => void;
  onDelete: (id: string) => void;
}

export function HistoryItem({ problem, onSelect, onDelete }: HistoryItemProps) {
  return (
    <div className="flex items-center space-x-4 animate-slide-up">
      <button
        onClick={() => onSelect(problem)}
        className="flex-1 text-left p-4 bg-white rounded-lg border border-primary-100 hover:border-primary-400 transition-all duration-200 group shadow-sm hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="font-medium text-primary-900 mb-1">{problem.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {new Date(problem.createdAt).toLocaleDateString()}
              </div>
              {problem.rootCause && (
                <span className="text-accent-600 bg-accent-50 px-2 py-0.5 rounded-full text-xs">
                  {problem.rootCause}
                </span>
              )}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-primary-300 group-hover:text-primary-500 transition-colors" />
        </div>
      </button>
      <DeleteButton onDelete={() => onDelete(problem.id)} />
    </div>
  );
}