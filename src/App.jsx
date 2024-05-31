import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Estatereport1 from './components/finalpages/Estatereport1';
import Homepage from './components/finalpages/Homepage';
import Fillingbill1 from './components/finalpages/Fillingbill1';
import Lastcollection1 from './components/finalpages/Lastcollection1';
import Order1 from './components/finalpages/Order1';
import Pfa1 from './components/finalpages/pfa1';
import Planning1 from './components/finalpages/Planning1';
import RouteTable1 from './components/finalpages/RouteTable1';
import Todaytapping1 from './components/finalpages/Todaytapping1';
import Cfa1 from './components/finalpages/Cfa1'

export default function App() {
  return (
    <Router>
    <Routes>
    <Route path="/lastcollection" element={<Lastcollection1 />} />
    <Route path="/estatereport" element={<Estatereport1 />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/fillingbill" element={<Fillingbill1 />} />
    <Route path="/order" element={<Order1 />} />
    <Route path="/pfa" element={<Pfa1 />} />
    <Route path="/planning" element={<Planning1 />} />
    <Route path="/routeTable" element={<RouteTable1 />} />
    <Route path="/todaytapping" element={<Todaytapping1 />} />
    <Route path="/lastcollection1" element={<Lastcollection1 />} />
    <Route path="/cfa" element={<Cfa1 />} />
  

    
    </Routes>
  </Router>
   
  
  

   
  );
}
