import { ProductsGrid } from "~/modules/product/componets/grid";
import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Products of Seliya" }];
}
export async function clientLoader() {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products: Products[] = await response.json();
  return { products };
}

export default function ProductsRoute({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div>
      <ProductsGrid products={products} />
    </div>
  );
}
