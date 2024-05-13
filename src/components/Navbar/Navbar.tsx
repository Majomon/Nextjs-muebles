import Link from "next/link";

export interface ListMenu {
  name: string;
  href: string;
}

export const Navbar = () => {
  const listMenu: ListMenu[] = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Login",
      href: "/api/auth/signin",
    },
  ];

  return (
    <div>
      <nav className="w-fit h-full flex flex-col sm:flex-row  mx-auto justify-center gap-4 text-sm my-1">
        {listMenu.map((menu) => (
          <Link
            href={menu.href}
            key={menu.name}
            className=" hover:text-violetGrow-600"
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
