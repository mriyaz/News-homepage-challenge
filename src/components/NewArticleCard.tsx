import React from 'react';
import { NewArticleData } from '../types';

const NewArticleCard: React.FC<{ article: NewArticleData }> = ({ article }) => {
  return (
    <div className="flex flex-row max-w-sm rounded overflow-hidden shadow-lg 
    hover:shadow-xl transition-shadow duration-300">

      <div className="px-4 text-white">
        <div className="font-extrabold text-xl mb-2 hover:text-yellow-600 hover:cursor-pointer">{article.title}</div>
        <p className="text-grayishBlue text-base font-medium mb-4">{article.summary}</p>
        <hr className="bg-darkGrayishBlue h-0.5 border-none" />
      </div>
    </div>
  );
};

export default NewArticleCard;
