"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/o-mnie", label: "O Mnie" },
  { href: "/usługa", label: "Usługa" },
  { href: "/galeria", label: "Galeria" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

const socialClass = "m-1 p-1 text-3xl transition-colors duration-300";
function SocialMedia({ colorNav }: { colorNav: boolean }) {
  return (
    <div className={`text-white/6 flex items-center justify-center`}>
      <Link
        href="https://www.facebook.com/jarek.olszewski"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <FaSquareFacebook
          className={clsx(socialClass, {
            "hover:text-white": colorNav,
          })}
        />
      </Link>
      <Link
        href="https://www.instagram.com/jarek.olszewski.fotografia/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <RiInstagramFill
          className={clsx(socialClass, {
            "hover:text-white": colorNav,
          })}
        />
      </Link>
    </div>
  );
}

function NavLinksDesctop({
  pathname,
  colorNav,
}: {
  pathname: string;
  colorNav: boolean;
}) {
  return (
    <ul className="hidden items-center justify-center space-x-4 text-sm lg:flex">
      {navLinks.map((link) => (
        <li className="list-none" key={link.label}>
          <Link
            href={link.href}
            className={clsx(
              `mx-3 px-2 py-2 text-[14px] font-semibold transition-colors duration-75`,
              {
                "hover:text-white":
                  pathname === "/" && pathname !== link.href && !colorNav,
              },
              {
                "hover:text-yellow-500":
                  pathname !== "/" && pathname !== link.href && !colorNav,
              },
              {
                "text-yellow-500": pathname === link.href,
              },
              {
                "hover:text-white": pathname !== link.href && colorNav,
              },
              {
                "text-yellow-500":
                  pathname === link.href && pathname === "/" && colorNav,
              },
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function NavLinksMobile({
  showMenu,
  pathname,
  handleMenu,
  colorNav,
}: {
  showMenu: boolean;
  pathname: string;
  handleMenu: () => void;
  colorNav: boolean;
}) {
  return (
    <ul
      className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col items-center justify-center space-y-4 bg-black text-sm text-white/80 shadow-2xl transition-transform duration-200 lg:hidden ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {navLinks.map((link) => (
        <li
          key={link.href}
          className={`px-4 py-3 font-semibold transition-colors hover:text-white ${
            pathname === link.href ? "font-medium text-yellow-500 " : ""
          }`}
        >
          <Link className="py-2" href={link.href} onClick={handleMenu}>
            {link.label}
          </Link>
        </li>
      ))}
      <li className="flex lg:hidden">
        <SocialMedia colorNav={colorNav} />
      </li>
    </ul>
  );
}

function BurgerMenu({
  showMenu,
  handleMenu,
}: {
  showMenu: boolean;
  handleMenu: () => void;
}) {
  return (
    <button
      aria-label="Menu"
      className={`z-50 order-1 h-12 rounded-lg p-2.5 lg:order-none lg:hidden transition-transform${
        showMenu ? "" : "rotate-90"
      }`}
      onClick={handleMenu}
    >
      <div
        className={`h-0.5 rounded-lg bg-yellow-500 transition-all ${
          showMenu ? "w-4 -rotate-45 scale-110" : "m-1 w-4"
        }`}
      />
      <div
        className={` h-0.5 rounded-lg bg-yellow-500 transition-all ${
          showMenu ? "scale-0" : "m-1 w-3"
        }`}
      />
      <div
        className={` h-0.5 rounded-lg bg-yellow-500 transition-all ${
          showMenu ? "w-4 -translate-y-1 rotate-45 scale-110" : "m-1 w-4"
        }`}
      />
    </button>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [colorNav, setColorNav] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setColorNav(true);
      } else {
        setColorNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        `top-0 z-[999] w-full`,
        { "fixed left-0": showMenu === true },
        {
          "slide-bottom fixed left-0 bg-black/50 lg:backdrop-blur-sm": colorNav === true,
        },
        {
          "absolute left-1/2 -translate-x-1/2":
            showMenu === false && colorNav === false,
        },
      )}
    >
      <nav className="mx-auto flex  max-w-[1800px] items-center justify-between px-3 py-2 md:px-12">
        <Link
          href="/"
          className="z-50 flex items-center justify-center font-semibold"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-8 w-auto"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M80.4832 1.12786C73.1995 -1.92759 64.6765 1.43874 61.4465 8.64677L53.8896 25.511L30.6774 12.1412C21.144 6.65012 8.74195 9.79475 2.97673 19.1649C-6.396 34.3984 7.8222 52.7662 25.3448 48.0612L46.3069 42.4326L32.8324 72.5025C28.3368 82.5352 32.9108 94.1158 43.0488 98.3686C59.701 105.354 76.7916 88.5516 69.6722 72.1939L59.8338 49.5886C58.5813 46.7109 58.332 43.7076 58.89 40.9002C65.7989 42.418 71.1519 48.485 70.9358 56.0474L70.8204 60.0858C70.4028 74.6943 90.1368 80.0822 97.8923 67.4772C102.063 60.6995 99.853 51.9851 92.9571 48.0133L64.6519 31.7099C66.8582 30.0242 69.569 28.8937 72.6146 28.5975L75.822 28.2854C90.7144 26.8366 94.1435 6.85818 80.4832 1.12786Z"
              fill="currentColor"
            />
          </svg>
          <p>Seovileo</p>
        </Link>
        <BurgerMenu showMenu={showMenu} handleMenu={handleMenu} />
        <NavLinksDesctop pathname={pathname} colorNav={colorNav} />
        <NavLinksMobile
          showMenu={showMenu}
          pathname={pathname}
          colorNav={colorNav}
          handleMenu={handleMenu}
        />
        <div className="hidden lg:flex">
          <SocialMedia colorNav={colorNav} />
        </div>
      </nav>
    </header>
  );
}
