import React from 'react';
import './App.css';
import SearchInput from './landing_page/searchInput';
import NavBar from './landing_page/NavBas';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from './cards/addCard';
import UserCards from './cards/userCards';
import Prompt from './chatbot/propmt';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './auth/login';
import Landing from './landing/landing';

const App = () => {
  const handleGenerate = (inputValue) => {
    console.log("Generated prompt:", inputValue);
    // Here you would typically handle the generation process,
    // like sending a request to an API or processing data.
  };
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Landing/>
          }/>
          <Route path="/add-card" element={<AddCard />} />
          <Route path='/cardstack' element={<UserCards />} />
          <Route path='/chatbot' element={<Prompt />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
