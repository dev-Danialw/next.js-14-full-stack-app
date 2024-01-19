"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${
        pathname === item.path
          ? "text-black bg-white min-w-14 p-2 rounded-2xl text-center font-bold"
          : "text-white"
      } hover:text-blue-600`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
