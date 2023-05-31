import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: 1,
    title: "마우스",
    price: 12000,
    description: "로지텍입니다.",
  },
  {
    id: 2,
    title: "삼양라면",
    price: 1000,
    description: "라면의 원조",
  },
  {
    id: 3,
    title: "컵",
    price: 1500000,
    description: "디자이너의 컵",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
