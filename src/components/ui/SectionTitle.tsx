import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-serif text-3xl md:text-4xl text-teal-800 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="w-16 h-1 bg-gold-400 rounded"></div>
      </div>
    </div>
  );
};

export default SectionTitle;