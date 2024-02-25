import React from 'react';
import { ArticleData } from '../types';

const ArticleCard: React.FC<{ article: ArticleData }> = ({ article }) => {
  return (
    <div className="flex flex-row max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:shadow-none">
      <img className="w-[35%] object-cover" src={article.imageUrl} alt={article.title} />
      <div className="pl-4 pb-4 md:pb-0">
        <div className="font-bold text-4xl mb-2 text-grayishBlue ">{article.id}</div>
        <div className="font-extrabold text-xl mb-2 tracking-tighter hover:text-softRed hover:cursor-pointer">{article.title}</div>
        <p className="text-darkGrayishBlue text-base font-medium">{article.summary}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
