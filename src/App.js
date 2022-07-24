import { ProductDetail } from "./containers/ProductDetail";
import ProductList from "./containers/ProductList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TopBar from "./component/TopBar";
import Footer from "./component/Footer";
import NavigationBar from "./component/NavigationBar";
import ProductFilter from "./component/ProductFilter";
function App()
{
  return (
    <div>
      <Router>
        <TopBar/>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/product_filter" element={<ProductFilter />} />
          <Route path="/product/:productId" element={<ProductDetail />}/>
          <Route>404 Not Found</Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
