import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import Cart from "./Cart";
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="mt-2 sm:mt-0 sm:flex md:order-2">
        <Cart/>
        <button className="rounde mr-3 hidden border border-white py-1.5 px-6 text-center text-sm font-medium text-slate-300 focus:outline-none   md:inline-block rounded-lg">Login</button>
        <button className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none   md:mr-0 md:inline-block rounded-lg">Register</button>
      </div>
    </div>
   );
}

export default UserMenu;
