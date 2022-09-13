
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Times New Roman, Georgia, Garamond, Arial, Helvetica'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/form' element={<Form />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
