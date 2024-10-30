import Link from "next/link";
function Header() {
  return (
    <header className=" flex justify-center py-3 bg-gray-100">
      <div className="bg-blue-600 text-white shadow-2xl rounded-lg p-4 space-y-2  text-center md:flex md:justify-around md:w-2/3">
        <Link href={"/"}>
          <h2 className="text-2xl hover:text-blue-300">LearnHub</h2>
        </Link>
        <nav className="font-bold space-x-2">
          <Link href="/" className=" hover:text-blue-300">
            Home
          </Link>
          <Link href="/courses" className="hover:text-blue-300">
            Courses
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
