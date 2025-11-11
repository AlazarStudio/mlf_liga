import React from "react";
import { Route, Routes } from "react-router-dom";

import Main_Page from "./Components/Pages/Main_Page";
import Non_Found_Page from "./Components/Pages/Non_Found_Page";
import Layout from "./Components/Standart/Layout/Layout";
import InstallButton from "./Components/Pages/InstallButton/InstallButton";
import News from "./Components/Pages/News/News";
import News_page from "./Components/Pages/News_page/News_page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main_Page />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<News_page />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
      </Routes>

      {/* Кнопка установки */}
      {/* <InstallButton /> */}
    </>
  )
}

export default App
