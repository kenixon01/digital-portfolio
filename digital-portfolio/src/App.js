import React from "react";
import Layout from "./layout/layout";
import { BrowserRouter } from 'react-router-dom';
import AnimatePages from "./components/Animations/AnimatePages";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatePages/>
      </Layout>
    </BrowserRouter>
  );
}

//Pages
//Layout - links
//Routing

export default App;