import React from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface TriviaQuestionProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (questionId: number, answer: string) => void;
}

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-serif font-bold mb-4">{question.question}</h3>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <div 
            key={option}
            className={`p-3 border rounded-lg cursor-pointer transition-all ${
              selectedAnswer === option 
                ? 'border-teal-500 bg-teal-50' 
                : 'border-gray-200 hover:border-teal-300'
            }`}
            onClick={() => onSelectAnswer(question.id, option)}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                selectedAnswer === option 
                  ? 'border-teal-500 bg-teal-500' 
                  : 'border-gray-300'
              }`}>
                {selectedAnswer === option && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className="text-gray-800">{option}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TriviaQuestion;
