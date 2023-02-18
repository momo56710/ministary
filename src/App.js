import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import WorkingOnIt from './pages/workingOnIt';
import Dashboard from './pages/dashboard';
import EditInnovant from './components/editpages/Innovant';
import LogIn from './pages/login';

import Innovant from './components/addingPages/Innovant';
import Tst from './components/addingPages/tst-input';
import Startups from './components/addingPages/Startups';
import AddUser from './pages/addUser';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add/st" element={<Startups />} />
          <Route path="/tst" element={<Tst />} />
          <Route path="/add/pi" element={<Innovant />} />
          <Route path="/edit/pi/:_id" element={<EditInnovant />} />
          <Route path="/add/user" element={<AddUser />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/comming-soon" element={<WorkingOnIt />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
