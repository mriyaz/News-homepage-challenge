import React from 'react';
import NewArticleCard from './NewArticleCard';
import { NewArticleData } from '../types';

interface NewArticleListProps {
  newArticles: NewArticleData[];
}

const NewArticleList: React.FC<NewArticleListProps> = ({ newArticles }) => {
  return (
    <div className="container mx-auto px-6 py-10 md:max-w-[30%] h-full">
      <div className="grid grid-cols-1 gap-4  bg-black md:p-5">
        <h2 className='pl-4 pt-4 text-4xl text-yellow-600 font-extrabold'>New</h2>
        {newArticles.map(newArticle => (
          <NewArticleCard key={newArticle.title} article={newArticle} />
        ))}
      </div>
    </div>
  );
};

export default NewArticleList;
