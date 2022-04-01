import "./App.css";
import Home from "./components/Home";
import Item from "./components/Item";
import ItemDetail from "./components/ItemDetail";
import PageNotFound from "./components/PageNotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/item" element={<Item />} />
      <Route path="/item/:id" element={<ItemDetail />} />
      <Route element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
