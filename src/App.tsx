import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ArticleList from './components/ArticleList';
import NewArticleList from './components/NewArticleList';
import { ArticleData, NewArticleData } from './types';

// Mock data
const featuredArticle: ArticleData = {
  id: '00',
  title: 'The Bright Future of Web 3.0?',
  summary: 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
  imageUrl: 'assets/images/image-web-3-desktop.jpg'
};

const articles: ArticleData[] = [
  {
    id: '01',
    title: 'Reviving Retro PCs',
    summary: 'What happens when old PCs are given modern upgrades?',
    imageUrl: 'assets/images/image-retro-pcs.jpg'
  },
  {
    id: '02',
    title: 'Top 10 Laptops of 2022',
    summary: 'Our best picks for various needs and budgets.',
    imageUrl: 'assets/images/image-top-laptops.jpg'
  },
  {

    id: '03',
    title: 'The Growth of Gaming',
    summary: 'How the pandemic has sparked fresh opportunities.',
    imageUrl: 'assets/images/image-gaming-growth.jpg'
  }

];

const newArticles: NewArticleData[] = [
  {
    title: 'Hydrogen VS Electric Cars',
    summary: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },

  {
    title: 'The Downsides of AI Artistry',
    summary: 'What are the possible adverse effects of on-demand AI image generation?',
  },

  {
    title: 'Is VC Funding Drying Up?',
    summary: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];



const App: React.FC = () => {
  return (
    <Layout>
      <div className="md:flex md:flex-row h-full md:h-auto">
        <HeroSection featuredArticle={featuredArticle} />
        <NewArticleList newArticles={newArticles} />
      </div>
      <ArticleList articles={articles} />
    </Layout>
  );
};

export default App;
