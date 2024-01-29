import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col md:flex-row justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl">
          ANIME LIST
        </Link>
        <InputSearch />
        <Link href="/api/auth/signin" className="">Sign In</Link>
      </div>
    </header>
  );
};

export default Navbar;
