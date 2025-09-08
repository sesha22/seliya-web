import { Card } from "~/components/ui/card";
import type { Product } from "../type";
import { Link } from "react-router";

export function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid-cols-4 grid gap-4">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`/products/${product.slug}`}>
              <Card>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="size-40 object-cover"
                />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
