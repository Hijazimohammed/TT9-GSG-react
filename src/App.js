import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};
