import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
        <Image
          onClick={() => router.push('/cart')}
          src="/images/carrito.png" 
          height='30' 
          width="30" 
          alt="Logo" 
        />
      </div>
    </div>
  );
}

export default Cart;
