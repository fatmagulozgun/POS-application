import ProductItem from "./ProductItem";

const Products = ({ products, filtered, search }) => {
  const dataToShow = search
    ? products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    : filtered.length > 0
      ? filtered
      : products;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {dataToShow.map((item) => (
        <ProductItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Products;