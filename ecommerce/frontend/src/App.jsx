// @ts-nocheck
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Header1 from "./components/header/Header1";
import Hero from "./components/hero/Hero";
import Hero2 from "./components/hero/Hero2";
import Main from "./components/main/Main";
import Mediaca from "./components/main/card";
import { Route, Routes } from "react-router-dom";
import Dialogue from './components/main/Dialogue'

function App() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />
      <Hero />
      <Hero2 />
      <Main />
      <Mediaca />

      <Routes>
        <Route path="/products" element={<pro />} />
        <Route path="/productdetails/:id"  element={<Dialogue/>}/>
      </Routes>
    </div>
  );
}

export default App;
