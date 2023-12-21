import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import BestSellerComponent from "./components/best.seller.component";
import ProductPage from "./pages/Product.page";
import HomePageLayout from "./layouts/home.layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/best-seller" element={<BestSellerComponent />} />
          <Route path="/products" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
