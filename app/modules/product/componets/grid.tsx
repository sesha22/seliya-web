import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { Product } from "../type";
import { Link } from "react-router";

export function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <ul>
      {products.map((product: any) => {
        return (
          <li key={product.id}>
            <Link to={`/products/${product.slug}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={product.imageUrl} alt={product.name} />
                </CardContent>
                <p>{product.price}</p>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
