'use client';
import React from 'react';
import Container from '../Container';
import Logo from '../Logo';
import MenuItem from './MenuItem';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
const Navbar = () => {
	const cartState = useSelector((state) => state.cartReducer);
    const { numberCart} = cartState;
	const router = useRouter();

	
	return ( 
		<div className="fixed w-full bg-gray-800 z-10 shadow-sm">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0">
						<Logo />
						<MenuItem/>
						<div className="relative">
							<div className="mt-2 sm:mt-0 sm:flex md:order-2">
								<div className="flex items-center justify-between">
									<div className="text-gray-600 focus:outline-none mx-7 py-1.6 px-6 sm:mx-0">
									<div className='flex flex-row gap-2'>
										<Image
											onClick={() => router.push('/cart')}
											src="/images/carrito.png" 
											height='25' 
											width="25" 
											alt="Logo" 
										/>
										<span className='font-bold text-red-500 inline-block'>
                  						    {numberCart}
                						</span>
									</div>
									</div>
								</div>
								<div className="inline-flex items-center gap-2 list-none lg:ml-auto">
									<button onClick={() => router.push('/auth/login')} className="rounde mr-3 hidden border border-white py-1.5 px-6 text-center text-sm font-medium text-slate-300 focus:outline-none   md:inline-block rounded-lg">Login</button>
									<button onClick={() => router.push('/auth/register')}  className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none   md:mr-0 md:inline-block rounded-lg">Register</button>
								</div>
								
							</div>
						</div>
					</div>
				</Container>
			</div>
	    </div>
	  );
	}



export default Navbar;