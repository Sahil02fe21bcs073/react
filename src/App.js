// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './component/loginPage';
import SignupPage from './component/SignupPage';
import Website from './component/Website';
import ContactForm from './component/ContactForm';
import MenuPage from './component/MenuPage';





const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Website/>} />
        <Route path="/Website" element={<Website />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/MenuPage" element={<MenuPage />} />
      
        
        
    
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
