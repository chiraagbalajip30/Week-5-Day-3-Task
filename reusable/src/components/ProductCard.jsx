import Button from "./Button";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shaadow p-4 hover:-translate-y-1 transition duration-300 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-4"
      />

      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>

      <p className="text-gray-600 mb-4">{product.price}</p>

      <Button text="View Product" />
    </div>
  );
};

export default ProductCard;
