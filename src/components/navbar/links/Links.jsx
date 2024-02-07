"use client";

import NavLink from "./navLink/navLink";

import { handleGoogleLogout } from "@/lib/actions";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = ({ session }) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}

        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleGoogleLogout}>
              <button className="p-2 rounded-sm font-bold bg-white text-black">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
    </div>
  );
};

export default Links;
