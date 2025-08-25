import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { Product } from "../type";
import { Link } from "react-router";

export function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Card>
              <CardHeader>
                <h4>{product.name}</h4>
              </CardHeader>
              <CardContent>
                <img src={product.imageUrl} alt={product.name} />
              </CardContent>
              <p>{product.price}</p>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
