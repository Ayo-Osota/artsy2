import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Drop, Auctions, Marketplace, LiveAuction, SingleProduct, ErrorPage } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/liveAuction" element={<LiveAuction />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
