import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Counter",
  description: "Contador Client Side",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full select-none	">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
}
