import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from './paginas/indexListing';
import Form from './paginas/indexForm';
import Navbar from "./componentes/Navbar/navbar";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

 
