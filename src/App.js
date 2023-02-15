import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Add from './pages/add';
import WorkingOnIt from './pages/workingOnIt';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/addS" element={<Add Add='AddS'/>} />
          <Route path="/addPI" element={<Add Add='AddPI'/>} />
          <Route path="/comming-soon" element={<WorkingOnIt/>} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
