import { ProductsGrid } from "~/modules/product/componets/grid";
import type { Route } from "./+types/products";
import type { Products } from "~/modules/product/schema";

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
      <section className="m-20">
        <p className="font-bold text-3xl text-center">Specialist Sambals</p>
      </section>
      <ProductsGrid products={products} />
    </div>
  );
}
