import Link from "next/link";
import { auth } from "@/lib/auth";

import Links from "./links/Links";

const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="h-24 flex items-center justify-between">
      <div>
        <Link href="/" className="text-3xl font-bold">
          Logo
        </Link>
      </div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
