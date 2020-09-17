import React from 'react';
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import './Style-app.css';

function App() {
  return (
    <div className="app-body">
    
    <Sidebar />
  
    <Body />
    </div>
  );
}

export default App;
