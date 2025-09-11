import { Card } from "~/components/ui/card";
import type { Product } from "../type";
import { Link } from "react-router";

export function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <ul
      className="grid grid-cols-4 gap-6 p-4 mx-auto"
      style={{ maxWidth: "900px" }}
    >
      {products.map((product) => {
        return (
          <li key={product.id} className="transition-transform hover:scale-105">
            <Link to={`/products/${product.slug}`} className="block h-full">
              <Card className="flex flex-col items-center p-4 rounded-xl bg-white">
                <div className="relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </div>
                <div className="py-4 space-y-2">
                  <h4 className="text-md font-semibold text-gray-800 mb-2 text-center truncate w-full">
                    {product.name}
                  </h4>
                  <p className="text-base font-bold text-indigo-600 mb-2 text-center">
                    Rp {product.price.toLocaleString()}
                  </p>
                </div>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
