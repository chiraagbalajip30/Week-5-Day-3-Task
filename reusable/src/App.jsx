import ProductCard from "./components/ProductCard";
import products from "./data/products";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Product Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.is} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
