import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedArticles from '../components/Home/FeaturedArticles';
import ArticleList from '../components/Articles/ArticleList';
import AboutSection from '../components/About/AboutSection';
import ContactSection from '../components/Contact/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <FeaturedArticles />
      <ArticleList />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;