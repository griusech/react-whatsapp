import React from 'react';
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Mensajes from './components/cuerpo/Mensajes'

import './Style-app.css';

function App() {
  return (
    <div className="app-body">
    
    <Sidebar />
  
    <Mensajes />
    </div>
  );
}

export default App;
