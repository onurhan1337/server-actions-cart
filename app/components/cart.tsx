import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCartItems } from "../db/actions";

const Cart = async () => {
  const cartItems = await getCartItems();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="bg-blue-500 text-white rounded-md w-32 h-10">
          Cart ({cartItems.length})
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col w-64">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <p>{item.title}</p>
              <p>{item.quantity}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
