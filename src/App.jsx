import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import BestSellerComponent from "./components/best.seller.component";
import ProductPage from "./pages/Product.page";
import HomePageLayout from "./layouts/home.layout";
import BlogPage from "./pages/blog.page";
import HiupDemoPage from "./pages/hiup-demo.page";
import LoginPage from "./pages/login.page";
import ShopPage from "./pages/shop.page";
import PagesPage from "./pages/pages.page";
import ContactPage from "./pages/contact.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/best-seller" element={<BestSellerComponent />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/hiup-demo" element={<HiupDemoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/pages" element={<PagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
