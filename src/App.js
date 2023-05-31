import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showIsCart = useSelector((state) => state.ui.showIsCart);
  console.log(showIsCart);
  return (
    <Layout>
      {showIsCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
