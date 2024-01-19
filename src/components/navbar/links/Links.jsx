"use client";

import NavLink from "./navLink/navLink";

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

// temp data
const session = false;
const isAdmin = true;

const Links = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="p-2 rounded-sm font-bold bg-white text-black">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
    </div>
  );
};

export default Links;
