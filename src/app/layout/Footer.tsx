import Link from "next/link";
function Footer() {
  return (
   <section className="flex justify-center text-center bg-red-400">
     <footer className="bg-blue-600 text-white w-screen space-y-3 py-3 ">
      <div className="md:flex md:justify-around">
        <h2 className="font-bold">LearnHub</h2>
        <nav className="font-bold space-x-2 md:space-x-4">
          <Link href="/" className=" hover:text-blue-300">
            Home
          </Link>
          <Link href="/courses" className="hover:text-blue-300">
            Courses
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About Us
          </Link>
          <Link href="contact" className="hover:text-blue-300">
            Contact Us
          </Link>
        </nav>
        <div className="space-x-2">
          <a href="" className="hover:text-blue-300">
            LinkedIn
          </a>
          <a href="" className="hover:text-blue-300">
            GitHub
          </a>
          <a href="" className="hover:text-blue-300">
            Instagramm
          </a>
        </div>
      </div>
      <hr />
      <p> LearnHub &copy; 2024 All rights reserved</p>
    </footer>
   </section>
  );
}

export default Footer;
