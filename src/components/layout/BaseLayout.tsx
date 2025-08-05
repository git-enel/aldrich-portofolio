"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeController } from "./ThemeController";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const mainMenu = [
  { label: "Home", href: "/home" },
  // { label: "Portfolio", href: "/portfolio" },
  // { label: "About Me", href: "/aboutme" },
  { label: "Services", href: "/Service" },
  { label: "Contact", href: "/contact" },
];

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="min-w-screen-sm max-w-screen-2xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {mainMenu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      pathname === item.href ? "font-semibold text-primary" : ""
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2 ml-2">
            <Image
              src="/asset/my_logo_gold.png"
              alt="Logo"
              width={30}
              height={30}
            />
            {/* <span className="text-xl font-bold">Aldrich Zebua</span> */}
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {mainMenu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    pathname === item.href ? "font-semibold text-primary" : ""
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <ThemeController />
        </div>
      </div>

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        {children}
      </div>
    </div>
  );
};
