import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { getCartItems } from "../db/actions";
import CartButton from "./cart-button";
import CartItem from "./cart-item";

const Cart = async () => {
  const cartItems = await getCartItems();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <CartButton itemsCount={cartItems.length} />
      </PopoverTrigger>
      <PopoverContent>
        {cartItems && cartItems.length === 0 ? (
          <p
            className="text-center text-gray-500"
            data-testid="cart-empty-message"
          >
            Your cart is empty
          </p>
        ) : (
          <div className="flex flex-col w-64">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col justify-between py-2">
                <CartItem item={item} />
              </div>
            ))}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
