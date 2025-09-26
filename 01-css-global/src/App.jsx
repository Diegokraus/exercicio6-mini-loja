import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar"; // vamos criar depois

const products = [
  {
    id: 1,
    title: "Produto 1 muito legal",
    price: 29.99,
    rating: 5,
    tag: "Novo",
    image: "https://placehold.co/300x300?text=Produto+1",
  },
  {
    id: 2,
    title: "Produto 2 incrível",
    price: 49.99,
    rating: 4,
    tag: "Promo",
    image: "https://placehold.co/300x300?text=Produto+2",
  },
  {
    id: 3,
    title: "Produto 3 fantástico",
    price: 19.99,
    rating: 3,
    tag: "",
    image: "https://placehold.co/300x300?text=Produto+3",
  },
  {
    id: 4,
    title: "Produto 4 sensacional",
    price: 39.99,
    rating: 4,
    tag: "Novo",
    image: "https://placehold.co/300x300?text=Produto+4",
  },
  {
    id: 5,
    title: "Produto 5 top",
    price: 59.99,
    rating: 5,
    tag: "",
    image: "https://placehold.co/300x300?text=Produto+5",
  },
  {
    id: 6,
    title: "Produto 6 legal",
    price: 24.99,
    rating: 2,
    tag: "Promo",
    image: "https://placehold.co/300x300?text=Produto+6",
  },
];

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
