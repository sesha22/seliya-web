import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Products of Seliya" }];
}
export async function clientLoader({}: Route.ClientLoaderArgs) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products = await response.json();

  console.log({ products });
  return products;
}

export default function ProductsRoute({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div>
      <ul>
        {products.map((product: any) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}
