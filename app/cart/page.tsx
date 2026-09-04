import Link from "next/link";
import CartView from "@/components/CartView";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      <div className="mx-auto w-full max-w-md px-4 py-6">
        <header className="mb-6">
          <Link href="/" className="text-sm font-medium text-gray-500">
            ← Continue Shopping
          </Link>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
            Your Cart
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Review items from your stores.
          </p>
        </header>

        <CartView />
      </div>
    </main>
  );
}
