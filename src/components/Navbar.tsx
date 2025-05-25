// components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "Product",  href: "/"        },
    { name: "Solutions", href: "/page2"   },
    { name: "Resources",  href: "/resources" },
    { name: "Pricing",  href: "/pricing" },
    { name: "Advisors", href: "/advisors" }
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
            <Image
              src="/img/logo.png"
              width="96"
              height="96"
              alt="Arvam Solutions Logo"
              className="w-24 h-24"
            />
          </span>
        </Link>

        {/* get started */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link href="/contact" className="px-6 py-2 text-white bg-[#017bad] rounded-md">
              Get Started
            </Link>
          </div>
        </div>

        {/* mobile hamburger */}
        <Disclosure as="div" className="lg:hidden">
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100"
              >
                {/* icons omitted for brevity */}
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-col w-full my-5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-[#017bad] rounded-md"
                >
                  Get Started
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-lg text-gray-800 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
