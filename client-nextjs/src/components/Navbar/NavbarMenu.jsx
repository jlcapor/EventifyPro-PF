import Link from "next/link";
const NavbarMenu = () => {
  const menuItems = ['Home', 'Event', 'About'];
  return (
    <div className="flex items-center justify-between">
      <ul className="text-orange-500 text-lg hidden lg:flex items-center">
        {menuItems.map((item) => (
          <li key={item} className="py-2 px-8 flex">
            <Link href={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default NavbarMenu;
