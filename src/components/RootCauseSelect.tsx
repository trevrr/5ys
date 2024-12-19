import React from 'react';
import { RootCauseCategory } from '../types/analysis';

interface RootCauseSelectProps {
  value: RootCauseCategory | undefined;
  onChange: (category: RootCauseCategory) => void;
}

const categories: RootCauseCategory[] = [
  'Human Error',
  'Equipment Malfunction',
  'Process Variation',
  'Supplier Issues',
  'External Factors',
];

export function RootCauseSelect({ value, onChange }: RootCauseSelectProps) {
  return (
    <div className="mb-6">
      <label htmlFor="rootCause" className="block text-sm font-medium text-gray-700 mb-2">
        Root Cause Category
      </label>
      <select
        id="rootCause"
        value={value || ''}
        onChange={(e) => onChange(e.target.value as RootCauseCategory)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      >
        <option value="" disabled>Select a category...</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <p className="mt-2 text-sm text-gray-500">
        Select the category that best describes the root cause identified in your analysis
      </p>
    </div>
  );
}