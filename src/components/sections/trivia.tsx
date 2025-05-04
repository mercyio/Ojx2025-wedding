import React from 'react';
import { Heart } from 'lucide-react';
import TriviaGame from '../trivia/triviaQuiz';

const TriviaSection: React.FC = () => {
  return (
    <section id="trivia" className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <TriviaGame
          title={
            <div className="flex items-center justify-center text-4xl font-serif text-teal-900">
              <span className="mr-1">O</span>
              <Heart className="w-8 h-8 mx-1 text-gold-400 animate-pulse fill-gold-400 stroke-gold-400" />
              <span className="ml-1">J Trivia Challenge</span>
            </div>
          }
          subtitle="How well do you know the happy couple? Test your knowledge!"
        />
      </div>
    </section>
  );
};

export default TriviaSection;
