import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Seliya" }, { name: "description", content: "Spesialist Sambal" }];
}
export async function clientLoader({}: Route.ClientLoaderArgs) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/products`);
  const products = await response.json();

  console.log({ products });
  return products;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const products = loaderData;

  return (
    <div>
      <section>
        <h1>Seliya Sambal</h1>
        {/* HERO */}
      </section>

      {products && (
        <ul>
          {products.map((product: any) => {
            return <li key={product.id}>{product.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
