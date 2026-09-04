"use client";

import { Product } from "@/types/product";
import { useCart } from "./CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="mb-3 flex h-36 items-center justify-center rounded-xl bg-gray-100">
        <span className="text-xs text-gray-400">Product Image</span>
      </div>

      <div>
        <p className="mb-1 text-xs font-medium text-gray-500">
          {product.store_name}
        </p>

        <h2 className="text-base font-semibold leading-tight text-gray-900">
          {product.name}
        </h2>

        <p className="mt-1 text-xs text-gray-500">{product.unit}</p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-base font-bold text-gray-900">
            ₹{product.price}
          </span>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="min-h-10 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
