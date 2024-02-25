import React from 'react';
import { ArticleData } from '../types';

interface HeroSectionProps {
  featuredArticle: ArticleData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredArticle }) => {
  return (
    <section className="container mx-auto px-6 py-10 flex flex-col h-full md:py-0 md:pt-10">
      <img className="flex-1 w-full mb-6 md:mt-0" src={featuredArticle.imageUrl} alt={featuredArticle.title} />

      <div className=" md:flex md:flex-row md:mt-5">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 
         md:tracking-tighter md:pr-14 md:mb-0">{featuredArticle.title}</h2>

        <div className="md:flex-col md:w-[70%]">
          <p className="text-darkGrayishBlue text-base font-medium mb-5">{featuredArticle.summary}</p>
          <button className="bg-softRed text-white px-5 py-2 rounded uppercase 
        tracking-widest md:mt-5 hover:bg-black">
            Read More
          </button>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
