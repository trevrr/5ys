import React from 'react';
import { Lightbulb } from 'lucide-react';

interface GuidanceProps {
  step: 'problem' | 'why' | 'summary';
  whyLevel?: number;
}

const tips = {
  problem: [
    'Be specific about the problem you\'re facing',
    'Focus on observable symptoms or effects',
    'Avoid including assumed causes in the description'
  ],
  why: [
    'Answer based on facts and observations',
    'Be specific and avoid generalizations',
    'Consider multiple perspectives',
    'Focus on system and process issues, not people'
  ],
  summary: [
    'Review the chain of causes',
    'Verify that each answer leads logically to the next question',
    'Consider if you\'ve reached a true root cause'
  ]
};

export function Guidance({ step, whyLevel }: GuidanceProps) {
  const currentTips = tips[step];

  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-6 animate-fadeIn">
      <div className="flex items-start space-x-3">
        <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5" />
        <div>
          <h3 className="text-sm font-medium text-blue-900 mb-2">
            {step === 'why' ? `Guidance for Why #${whyLevel}` : 'Tips'}
          </h3>
          <ul className="text-sm text-blue-700 space-y-1">
            {currentTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}