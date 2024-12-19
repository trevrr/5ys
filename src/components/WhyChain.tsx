import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Problem } from '../types/analysis';

interface WhyChainProps {
  problem: Problem;
}

export function WhyChain({ problem }: WhyChainProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Initial Problem Description</h2>
        <p className="text-gray-700">{problem.description}</p>
      </div>

      <div className="divide-y divide-gray-200">
        {problem.whys.map((why, index) => (
          <div key={why.id} className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">{index + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 font-medium mb-2">{why.question}</h3>
                <p className="text-gray-700">{why.answer}</p>
              </div>
            </div>
            {index < problem.whys.length - 1 && (
              <div className="ml-16 mt-4">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}