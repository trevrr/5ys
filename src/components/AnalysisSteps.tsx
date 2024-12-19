import React from 'react';
import { Problem } from '../types/analysis';
import { WhyForm } from './WhyForm';
import { Guidance } from './Guidance';

interface AnalysisStepsProps {
  currentProblem: Problem;
  currentWhyIndex: number;
  onAnswer: (answer: string) => void;
  onBack: () => void;
}

export function AnalysisSteps({ 
  currentProblem, 
  currentWhyIndex, 
  onAnswer, 
  onBack 
}: AnalysisStepsProps) {
  return (
    <>
      <WhyForm
        currentWhy={{
          id: crypto.randomUUID(),
          question: currentWhyIndex === 0 
            ? `Why is this happening: "${currentProblem.description}"?`
            : `Why ${currentProblem.whys[currentWhyIndex - 1].answer.toLowerCase()}?`,
          answer: currentProblem.whys[currentWhyIndex]?.answer || '',
          level: currentWhyIndex + 1,
        }}
        onAnswer={onAnswer}
        onBack={currentWhyIndex > 0 ? onBack : undefined}
        isLast={currentWhyIndex === 4}
      />
      <Guidance step="why" whyLevel={currentWhyIndex + 1} />
    </>
  );
}