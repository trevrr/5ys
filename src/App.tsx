import React from 'react';
import { AnalysisSteps } from './components/AnalysisSteps';
import { InitialScreen } from './components/InitialScreen';
import { Summary } from './components/Summary';
import { Guidance } from './components/Guidance';
import { useAnalysis } from './hooks/useAnalysis';

export default function App() {
  const {
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
  } = useAnalysis();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        {!currentProblem && (
          <InitialScreen
            problems={problems}
            onSubmit={handleProblemSubmit}
            onHistorySelect={handleHistorySelect}
            onDeleteAnalysis={handleDeleteAnalysis}
          />
        )}
        
        {currentProblem && currentWhyIndex >= 0 && currentWhyIndex < 5 && (
          <AnalysisSteps
            currentProblem={currentProblem}
            currentWhyIndex={currentWhyIndex}
            onAnswer={handleWhyAnswer}
            onBack={handleBack}
          />
        )}

        {currentProblem && currentWhyIndex >= 4 && (
          <>
            <Summary 
              problem={currentProblem} 
              onRestart={handleRestart}
              onRootCauseSelect={handleRootCauseSelect}
              onCorrectiveActionChange={handleCorrectiveActionChange}
            />
            <Guidance step="summary" />
          </>
        )}
      </div>
    </div>
  );
}