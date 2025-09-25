// import { useState } from 'react'
// import Header from './pages/header';
// import Footer from './pages/Footer';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/aboutpage';
import Skill from './pages/skill';
// import Ab
export const navLinks = [
  {ui: 0,text:'ホーム',url:'/',element:{Homepage}},
  {ui: 1,text:'私について',url:'/about',element:{About}},
  {ui: 2,text:'私のスキル',url:'/skills',element:{Skill}},
]
function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {navLinks.map(link => (
              <li key={link.ui}>
                <a href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <Routes>
          {/* {navLinks.map(link =>(
            <Route path={link.url} element={link.element}>
              {link.text}
            </Route>
          ))} */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path='/skills' element={<Skill />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
