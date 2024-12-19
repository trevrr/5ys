import React from 'react';
import { FileJson, FileSpreadsheet } from 'lucide-react';
import { Problem } from '../types/analysis';
import { exportToCSV, exportToJSON } from '../utils/export';

interface ExportButtonsProps {
  problem: Problem;
}

export function ExportButtons({ problem }: ExportButtonsProps) {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => exportToCSV(problem)}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <FileSpreadsheet className="w-4 h-4 mr-2" />
        Export CSV
      </button>
      <button
        onClick={() => exportToJSON(problem)}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <FileJson className="w-4 h-4 mr-2" />
        Export JSON
      </button>
    </div>
  );
}