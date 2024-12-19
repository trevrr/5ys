import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Why } from '../types/analysis';

interface WhyFormProps {
  currentWhy: Why;
  onAnswer: (answer: string) => void;
  onBack?: () => void;
  isLast: boolean;
}

export function WhyForm({ currentWhy, onAnswer, onBack, isLast }: WhyFormProps) {
  const [answer, setAnswer] = React.useState(currentWhy.answer);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim()) {
      onAnswer(answer);
    }
  };

  return (
    <div className="w-full max-w-2xl animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
            Why #{currentWhy.level}
          </span>
          <span className="text-sm text-gray-500">
            {isLast ? 'Final Why' : `${currentWhy.level}/5`}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">{currentWhy.question}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="answer" className="block text-sm font-medium text-primary-700 mb-2">
            Your Answer
          </label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[120px] bg-white shadow-sm transition-all duration-200"
            placeholder="Provide your answer..."
            required
          />
        </div>

        <div className="flex justify-between space-x-4">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="flex items-center justify-center px-6 py-3 border border-primary-200 rounded-lg text-primary-700 hover:bg-primary-50 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </button>
          )}
          <button
            type="submit"
            className="flex-1 flex items-center justify-center bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-6 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isLast ? 'Complete Analysis' : 'Next Why'}
            {!isLast && <ArrowRight className="w-4 h-4 ml-2" />}
          </button>
        </div>
      </form>
    </div>
  );
}