import ProductList from "@/components/ProductList";
import CartBar from "@/components/CartBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <div className="mx-auto w-full max-w-md px-4 py-6">
        <header className="mb-6">
          <p className="text-sm font-medium text-gray-500">
            Multi-Vendor Store
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
            Shop Products
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Explore products from different local stores.
          </p>
        </header>

        <ProductList />
      </div>

      <CartBar />
    </main>
  );
}
