import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/main";
import Monday from './components/pages/monday';
import Tuesday from './components/pages/tuesday';
import Wednesday from './components/pages/wednesday';
import Thursday from './components/pages/thursday';
import Friday from './components/pages/friday';
import './App.css';

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Monday />} />
          <Route path="tuesday" element={<Tuesday />} />
          <Route path="wednesday" element={<Wednesday />} />
          <Route path="thursday" element={<Thursday />} />
          <Route path="friday" element={<Friday />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
  );
}

/*

Create a multipage app containing a layout component.

and three page components:

homepage, about, contact page

Use w3 schools as a guide
*/


// /& create a component called Pizza that accepts 2 props: name, and ingredients.