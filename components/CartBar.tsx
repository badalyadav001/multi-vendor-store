"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartBar() {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-gray-500">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </p>

          <p className="text-lg font-bold text-gray-900">₹{totalPrice}</p>
        </div>

        <Link
          href="/cart"
          className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
        >
          View Cart →
        </Link>
      </div>
    </div>
  );
}
