import { useState } from 'react';
import { Problem, RootCauseCategory, CorrectiveAction } from '../types/analysis';
import { useLocalStorage } from './useLocalStorage';

export function useAnalysis() {
  const [problems, setProblems] = useLocalStorage<Problem[]>('rca-problems', []);
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [currentWhyIndex, setCurrentWhyIndex] = useState<number>(-1);

  const handleProblemSubmit = (description: string) => {
    const newProblem: Problem = {
      id: crypto.randomUUID(),
      description,
      whys: [],
      createdAt: new Date(),
    };
    setCurrentProblem(newProblem);
    setCurrentWhyIndex(0);
  };

  const handleWhyAnswer = (answer: string) => {
    if (!currentProblem) return;

    const updatedWhys = [...currentProblem.whys];
    const currentWhy = {
      id: crypto.randomUUID(),
      question: currentWhyIndex === 0 
        ? `Why is this happening: "${currentProblem.description}"?`
        : `Why ${currentProblem.whys[currentWhyIndex - 1].answer.toLowerCase()}?`,
      answer,
      level: currentWhyIndex + 1,
    };

    updatedWhys[currentWhyIndex] = currentWhy;
    const updatedProblem = { ...currentProblem, whys: updatedWhys };
    setCurrentProblem(updatedProblem);

    if (currentWhyIndex === 4) {
      setCurrentProblem(updatedProblem);
    } else {
      setCurrentWhyIndex(currentWhyIndex + 1);
    }
  };

  const handleRootCauseSelect = (category: RootCauseCategory) => {
    if (!currentProblem) return;
    
    const updatedProblem = { ...currentProblem, rootCause: category };
    setCurrentProblem(updatedProblem);
    updateProblemInHistory(updatedProblem);
  };

  const handleCorrectiveActionChange = (action: CorrectiveAction) => {
    if (!currentProblem) return;

    const updatedProblem = { ...currentProblem, correctiveAction: action };
    setCurrentProblem(updatedProblem);
    updateProblemInHistory(updatedProblem);
  };

  const updateProblemInHistory = (problem: Problem) => {
    const updatedProblems = problems.map(p => 
      p.id === problem.id ? problem : p
    );
    if (!problems.some(p => p.id === problem.id)) {
      updatedProblems.unshift(problem);
    }
    setProblems(updatedProblems);
  };

  const handleDeleteAnalysis = (id: string) => {
    setProblems(problems.filter(problem => problem.id !== id));
  };

  const handleBack = () => {
    setCurrentWhyIndex(currentWhyIndex - 1);
  };

  const handleRestart = () => {
    setCurrentProblem(null);
    setCurrentWhyIndex(-1);
  };

  const handleHistorySelect = (problem: Problem) => {
    setCurrentProblem(problem);
    setCurrentWhyIndex(5);
  };

  return {
    problems,
    currentProblem,
    currentWhyIndex,
    handleProblemSubmit,
    handleWhyAnswer,
    handleRootCauseSelect,
    handleCorrectiveActionChange,
    handleDeleteAnalysis,
    handleBack,
    handleRestart,
    handleHistorySelect,
  };
}