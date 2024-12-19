import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

interface DeleteButtonProps {
  onDelete: () => void;
}

export function DeleteButton({ onDelete }: DeleteButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return (
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setShowConfirm(false)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onDelete();
            setShowConfirm(false);
          }}
          className="text-sm text-red-500 hover:text-red-700 font-medium"
        >
          Confirm Delete
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="text-gray-400 hover:text-red-500 transition-colors"
      title="Delete analysis"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}