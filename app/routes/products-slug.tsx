import React from "react";
import type { Product } from "~/modules/product/type";
import type { Route } from "./+types/products-slug";

export function meta({}: Route.MetaArgs) {
  return [{ title: "(Product Name) of Seliya" }];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products/${params.slug}`
  );
  const product: Product = await response.json();
  return { product };
}

export default function ProductsRoute({ loaderData }: Route.ComponentProps) {
  const { product } = loaderData;
  const [quantity, setQuantity] = React.useState(1);

  const handleDecrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };
  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add to cart logic here
    alert(`Added ${quantity} of ${product.name} to cart!`);
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "2rem auto",
        padding: "2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderRadius: 12,
        background: "#fff",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{product.name}</h1>
      <div
        style={{
          fontSize: "1.1rem",
          fontWeight: 500,
          color: "#d32f2f", // changed from blue to red
          marginBottom: "1rem",
        }}
      >
        {product.price
          ? `Rp ${product.price.toLocaleString("id-ID")}`
          : "Price not available"}
      </div>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{
          width: "100%",
          maxHeight: 300,
          objectFit: "cover",
          borderRadius: 8,
          marginBottom: "1rem",
        }}
      />
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        {product.description}
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        <label htmlFor="quantity" style={{ fontWeight: 500 }}>
          Quantity:
        </label>
        <button
          type="button"
          onClick={handleDecrease}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1.2rem",
            borderRadius: 4,
            border: "1px solid #ccc",
            background: "#f5f5f5",
          }}
        >
          -
        </button>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          style={{
            width: 60,
            textAlign: "center",
            fontSize: "1rem",
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        <button
          type="button"
          onClick={handleIncrease}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1.2rem",
            borderRadius: 4,
            border: "1px solid #ccc",
            background: "#f5f5f5",
          }}
        >
          +
        </button>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1.5rem",
            fontSize: "1rem",
            borderRadius: 4,
            background: "#007bff",
            color: "#fff",
            border: "none",
            fontWeight: 600,
          }}
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}
