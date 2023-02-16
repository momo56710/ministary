import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Add from './pages/add';
import WorkingOnIt from './pages/workingOnIt';
import Dashboard from './pages/dashboard';
import Edit from './pages/edit'
import LogIn from './pages/logIn'
import Tst from './pages/tst'
import client from './components/client';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/addS" element={<Add Add='AddS'/>} />
          <Route path="/addPI" element={<Add Add='AddPI'/>} />
          <Route path="/Log-In" element={<LogIn/>} />
          <Route path="/comming-soon" element={<WorkingOnIt/>} />
          {client().map((cli,i) => (
            <Route path={`/edit-${i}`} element={<Edit person={cli}/>} />
          ))
            }
          <Route path="/" element={<Dashboard />} />
          <Route path="/tst" element={<Tst />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
