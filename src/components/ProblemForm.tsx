import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ProblemFormProps {
  onSubmit: (description: string) => void;
}

export function ProblemForm({ onSubmit }: ProblemFormProps) {
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onSubmit(description);
    }
  };

  return (
    <div className="w-full max-w-2xl animate-fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary-900 mb-3 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          Root Cause Analysis
        </h1>
        <p className="text-gray-600">Describe the problem you want to analyse</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="problem" className="block text-sm font-medium text-primary-700 mb-2">
            Problem Description
          </label>
          <textarea
            id="problem"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[120px] bg-white shadow-sm transition-all duration-200"
            placeholder="Describe the problem you're facing..."
            required
          />
        </div>

        <div className="bg-primary-50 p-4 rounded-lg flex items-start space-x-3 border border-primary-100">
          <AlertCircle className="w-5 h-5 text-primary-500 mt-0.5" />
          <p className="text-sm text-primary-700">
            We'll guide you through the <a href="https://en.wikipedia.org/wiki/Five_whys" className="text-accent-600 hover:text-accent-700 underline">
              "5 Whys" technique
            </a> to help identify the root cause of this problem.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-6 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Start Analysis
        </button>
      </form>
    </div>
  );
}