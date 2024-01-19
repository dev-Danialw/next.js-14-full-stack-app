import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div>
        <Link href="/" className="text-3xl font-bold">
          Logo
        </Link>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
