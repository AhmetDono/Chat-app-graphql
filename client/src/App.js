import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat'
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chat/:id" element={<Chat/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
