import { Card } from "~/components/ui/card";
import type { Product } from "../type";
import { Link } from "react-router";

export function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <ul
      className="grid grid-cols-4 gap-4 p-0 mx-auto justify-items-center"
      style={{ maxWidth: "900px" }}
    >
      {products.map((product) => {
        return (
          <li key={product.id} className="transition-transform hover:scale-105">
            <Link to={`/products/${product.slug}`} className="block h-full">
              <Card className="flex flex-col items-center bg-white p-0">
                <div className="relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-40 h-40 object-cover mb-2"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </div>
                <div className="space-y-1 w-full">
                  <h4 className="text-md font-semibold uppercase text-gray-900 text-center px-2">
                    {product.name}
                  </h4>
                  <p className="text-sm font-bold text-red-600 text-center">
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
