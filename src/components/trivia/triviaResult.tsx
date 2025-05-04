import React from 'react';
import Button from '../ui/Button';

interface TriviaResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const TriviaResults: React.FC<TriviaResultsProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = '';
  let emoji = '';
  
  if (percentage === 100) {
    message = "Perfect score! You know the couple so well!";
    emoji = "🏆";
  } else if (percentage >= 80) {
    message = "Great job! You're definitely a close friend!";
    emoji = "🎉";
  } else if (percentage >= 60) {
    message = "Not bad! You know quite a bit about the couple.";
    emoji = "👍";
  } else if (percentage >= 40) {
    message = "You've got some things right! Keep getting to know the couple better.";
    emoji = "😊";
  } else {
    message = "Time to learn more about the happy couple!";
    emoji = "💕";
  }

  return (
    <div className="text-center py-6">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-serif font-bold mb-2">Your Score: {score}/{totalQuestions}</h3>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div 
          className="bg-teal-500 h-4 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-gray-700 mb-6">{message}</p>
      
      <div className="flex justify-center space-x-4">
        <Button onClick={onRestart} variant="primary">
          Play Again
        </Button>
        <Button onClick={() => window.scrollTo(0, 0)} variant="outline">
          Back to Top
        </Button>
      </div>
    </div>
  );
};

export default TriviaResults;
