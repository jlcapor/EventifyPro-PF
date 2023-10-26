import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-600 focus:outline-none mx-7 py-1.6 px-6 sm:mx-0">
        <Image
          onClick={() => router.push('/cart')}
          src="/images/carrito.png" 
          height='25' 
          width="25" 
          alt="Logo" 
        />
      </div>
    </div>
  );
}

export default Cart;
