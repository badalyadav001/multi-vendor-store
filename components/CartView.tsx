"use client";

import { useMemo } from "react";
import { useCart } from "./CartContext";

export default function CartView() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const groupedItems = useMemo(() => {
    return cartItems.reduce<Record<string, typeof cartItems>>(
      (groups, item) => {
        if (!groups[item.store_name]) {
          groups[item.store_name] = [];
        }

        groups[item.store_name].push(item);

        return groups;
      },
      {},
    );
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
        <p className="text-4xl">🛒</p>
        <h2 className="mt-3 text-lg font-semibold text-gray-900">
          Your cart is empty
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Add some products to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {Object.entries(groupedItems).map(([storeName, items]) => (
        <section
          key={storeName}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
            <h2 className="font-semibold text-gray-900">🏪 {storeName}</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {items.map((item) => (
              <div key={item.id} className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>

                    <p className="mt-1 text-sm text-gray-500">{item.unit}</p>

                    <p className="mt-2 font-semibold text-gray-900">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm font-medium text-red-500"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    ₹{item.price} each
                  </span>

                  <div className="flex items-center rounded-xl border border-gray-200">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center text-lg font-medium"
                    >
                      −
                    </button>

                    <span className="flex h-9 w-9 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center text-lg font-medium"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
