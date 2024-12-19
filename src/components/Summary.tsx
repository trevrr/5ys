import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Problem, RootCauseCategory, CorrectiveAction } from '../types/analysis';
import { ExportButtons } from './ExportButtons';
import { RootCauseSelect } from './RootCauseSelect';
import { CorrectiveActionForm } from './CorrectiveActionForm';
import { WhyChain } from './WhyChain';

interface SummaryProps {
  problem: Problem;
  onRestart: () => void;
  onRootCauseSelect: (category: RootCauseCategory) => void;
  onCorrectiveActionChange: (action: CorrectiveAction) => void;
}

export function Summary({ 
  problem, 
  onRestart, 
  onRootCauseSelect,
  onCorrectiveActionChange 
}: SummaryProps) {
  return (
    <div className="w-full max-w-3xl animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-success-600" />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
          Analysis Complete
        </h1>
        <p className="text-gray-600">Here's your root cause analysis breakdown</p>
      </div>

      <div className="space-y-6">
        <WhyChain problem={problem} />

        <div className="bg-white rounded-lg shadow-lg border border-primary-100 p-8 space-y-8">
          <RootCauseSelect
            value={problem.rootCause}
            onChange={onRootCauseSelect}
          />
          
          <hr className="border-primary-100" />
          
          <CorrectiveActionForm
            value={problem.correctiveAction}
            onChange={onCorrectiveActionChange}
          />
          
          <hr className="border-primary-100" />
          
          <ExportButtons problem={problem} />
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-8 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start New Analysis
          </button>
        </div>
      </div>
    </div>
  );
}