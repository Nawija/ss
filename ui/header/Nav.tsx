import Link from "next/link";
import { MainBtn } from "@/ui/buttons/MainBtn";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/o-mnie", label: "O Mnie" },
    { href: "/usługa", label: "Usługa" },
    { href: "/galeria", label: "Galeria" },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: "Kontakt" },
];
export default function Nav() {
    return (
        <header className="absolute top-0 left-0 z-[999] w-full">
            <nav className="flex items-center justify-between py-2 md:py-4 px-3 md:px-12">
                <Link
                    href="/"
                    className="font-semibold flex items-center justify-center"
                >
                    <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-auto mr-1"
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
                <ul className="lg:flex items-center justify-center text-sm hidden">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                className="hover:text-white transition-colors p-2 mx-2"
                                href={href}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <MainBtn>Darmowa Wycena</MainBtn>
            </nav>
        </header>
    );
}
