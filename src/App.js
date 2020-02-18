import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeGrid from './Componenets/HomeGrid';
import LoginForm from './Componenets/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Gadgets 4 U</h1>
       

        <p>

        <LoginForm/>
      
        </p>
        
        <img src="g4uimageprototype.png" alt="Responsive image"></img>
       
      </header>
         
          <HomeGrid/>
          
    </div>
  
  );
}

export default App;
