import { ShoppingCartIcon } from "lucide-react";

const CartButton = ({ itemsCount }: { itemsCount: number }) => {
  return (
    <button className="relative py-2">
      <span className="t-0 absolute left-3">
        <p className="flex size-2 items-center justify-center rounded-full bg-green-500/60 p-3 text-xs text-white">
          {itemsCount}
        </p>
      </span>
      <ShoppingCartIcon className="file: mt-4 h-6 w-6" />
    </button>
  );
};

export default CartButton;
