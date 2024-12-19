import { Problem } from '../types/analysis';

export function exportToCSV(problem: Problem): void {
  const rows = [
    ['Problem Description', problem.description],
    ['Created At', new Date(problem.createdAt).toLocaleString()],
    [''],
    ['Level', 'Question', 'Answer']
  ];

  problem.whys.forEach((why) => {
    rows.push([why.level.toString(), why.question, why.answer]);
  });

  const csvContent = rows
    .map((row) => row.map((cell) => `"${cell}"`).join(','))
    .join('\n');

  downloadFile(
    csvContent,
    `root-cause-analysis-${formatDate(problem.createdAt)}.csv`,
    'text/csv;charset=utf-8;'
  );
}

export function exportToJSON(problem: Problem): void {
  const jsonContent = JSON.stringify(problem, null, 2);
  downloadFile(
    jsonContent,
    `root-cause-analysis-${formatDate(problem.createdAt)}.json`,
    'application/json'
  );
}

function downloadFile(content: string, filename: string, type: string): void {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function formatDate(date: Date): string {
  return new Date(date).toISOString().split('T')[0];
}