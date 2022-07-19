import React from 'react';
import { Main } from './components/Main';
import { Form } from './components/Form';
import { Detail } from './components/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
