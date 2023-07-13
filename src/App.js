import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import PostsPage from './pages/PostsPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='posts' element={<PostsPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='404' element={<h1>Page Not Found</h1>} />
        <Route path='*' element={<Navigate to={'404'} replace={true} />} />
      </Routes>
      <Footer />
    </>
  );
};
