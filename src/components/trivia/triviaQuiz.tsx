import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import TriviaQuestion from './triviaQuestion';
import TriviaResults from './triviaResult';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface TriviaGameProps {
  title?: string;
  subtitle?: string;
}

const TriviaGame: React.FC<TriviaGameProps> = ({ 
  title = "Wedding Trivia", 
  subtitle = "Test your knowledge about the couple" 
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [gameState, setGameState] = useState<'loading' | 'playing' | 'finished'>('loading');
  const [score, setScore] = useState(0);

  useEffect(() => {
    // In a real app, you might fetch these from an API
    const triviaQuestions: Question[] = [
      {
        id: 1,
        question: "Where did the couple first meet?",
        options: ["College", "Work", "Through friends", "Dating app"],
        correctAnswer: "College"
      },
      {
        id: 2,
        question: "What year did they get engaged?",
        options: ["2020", "2021", "2022", "2023"],
        correctAnswer: "2022"
      },
      {
        id: 3,
        question: "What is their favorite vacation spot?",
        options: ["Beach", "Mountains", "City", "Countryside"],
        correctAnswer: "Beach"
      },
      {
        id: 4,
        question: "What is their first pet's name?",
        options: ["Max", "Bella", "Charlie", "Luna"],
        correctAnswer: "Luna"
      },
      {
        id: 5,
        question: "What food do they both love?",
        options: ["Pizza", "Sushi", "Tacos", "Pasta"],
        correctAnswer: "Sushi"
      }
    ];
    
    setQuestions(triviaQuestions);
    setGameState('playing');
  }, []);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate score
      let correctCount = 0;
      Object.entries(answers).forEach(([questionId, answer]) => {
        const question = questions.find(q => q.id === parseInt(questionId));
        if (question && question.correctAnswer === answer) {
          correctCount++;
        }
      });
      setScore(correctCount);
      setGameState('finished');
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setGameState('playing');
  };

  if (gameState === 'loading') {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin-slow w-12 h-12 border-4 border-teal-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const isAnswered = !!selectedAnswer;

  return (
    <div className="py-8">
      <SectionTitle title={title} subtitle={subtitle} centered />
      
      <Card className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {gameState === 'playing' ? (
          <>
            <div className="mb-4 text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            
            {currentQuestion && (
              <TriviaQuestion
                question={currentQuestion}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleAnswer}
              />
            )}
            
            <div className="mt-6 flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!isAnswered}
                variant="primary"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            </div>
          </>
        ) : (
          <TriviaResults 
            score={score} 
            totalQuestions={questions.length} 
            onRestart={resetGame} 
          />
        )}
      </Card>
    </div>
  );
};

export default TriviaGame;
