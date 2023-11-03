'use client';
import React from 'react';
import Container from '../Container';
import Logo from '../Logo';
import NavbarMenu from './NavbarMenu';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Login from '@/app/login'; 
import Logout from '@/app/logout';


const Navbar = () => {
	const router = useRouter();
	return ( 
		<div className="fixed w-full bg-gray-800 z-10 shadow-sm">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0">
						<Logo />
						<NavbarMenu/>
						<div className="relative">
							<div className="mt-2 sm:mt-0 sm:flex md:order-2">
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
								
							</div>
						</div>
											<Login/>
											<Logout/>
					</div>
				</Container>
			</div>
	    </div>
	  );
	}



export default Navbar;