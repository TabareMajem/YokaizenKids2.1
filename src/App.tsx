import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import KidsLogin from './pages/KidsLogin';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import ParentDashboard from './pages/ParentDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import LearningPathPage from './pages/LearningPathPage';
import JournalPage from './pages/JournalPage';
import MangaStoriesPage from './pages/MangaStoriesPage';
import AICompanions from './pages/AICompanions';
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutUs';
import PricingPage from './pages/PricingPage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import DemoPage from './pages/DemoPage';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/kids-login" element={<KidsLogin />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/demo" element={<DemoPage />} />

              {/* Protected routes */}
              <Route path="/app" element={<Layout />}>
                <Route path="learning-path" element={<LearningPathPage />} />
                <Route path="student-dashboard" element={<StudentDashboard />} />
                <Route path="teacher-dashboard" element={<TeacherDashboard />} />
                <Route path="parent-dashboard" element={<ParentDashboard />} />
                <Route path="journal" element={<JournalPage />} />
                <Route path="manga-stories" element={<MangaStoriesPage />} />
                <Route path="ai-companions" element={<AICompanions />} />
                
                {/* Admin routes */}
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="admin/*" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
}