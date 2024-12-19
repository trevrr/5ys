import React from 'react';
import { CorrectiveAction } from '../types/analysis';

interface CorrectiveActionFormProps {
  value: CorrectiveAction | undefined;
  onChange: (action: CorrectiveAction) => void;
}

export function CorrectiveActionForm({ value, onChange }: CorrectiveActionFormProps) {
  const [formData, setFormData] = React.useState<CorrectiveAction>(value || {
    description: '',
    responsiblePerson: '',
    startDate: '',
    completionDate: '',
  });

  const handleChange = (field: keyof CorrectiveAction, newValue: string) => {
    const updated = { ...formData, [field]: newValue };
    setFormData(updated);
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Corrective Action Plan</h3>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Potential Corrective Action
          <span className="text-gray-500 ml-1">(max 500 words)</span>
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          maxLength={2500} // Approximately 500 words
          placeholder="Describe the corrective action to be taken..."
          required
        />
      </div>

      <div>
        <label htmlFor="responsiblePerson" className="block text-sm font-medium text-gray-700 mb-2">
          Person Responsible for Corrective Action
        </label>
        <input
          type="text"
          id="responsiblePerson"
          value={formData.responsiblePerson}
          onChange={(e) => handleChange('responsiblePerson', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter name of responsible person"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
            Date to Begin CA
          </label>
          <input
            type="date"
            id="startDate"
            value={formData.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700 mb-2">
            Intended Completion Date
          </label>
          <input
            type="date"
            id="completionDate"
            value={formData.completionDate}
            onChange={(e) => handleChange('completionDate', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>
    </div>
  );
}