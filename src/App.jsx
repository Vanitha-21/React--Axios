import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import ListPages from "./Components/ListPage.jsx";
// import Footer from "./Components/Footer";
import { UserContextProvider } from "./Components/context/usercontext.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListPages" element={<ListPages />} />
        </Routes>
      </UserContextProvider>
      {/* <Footer /> */}
    </div>
  );
}


export default App;