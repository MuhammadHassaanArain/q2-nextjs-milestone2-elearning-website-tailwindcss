import Image from "next/image";
import HomeImage from "../../public/Images/homepageimageforlearnhub.jpg";
import Link from "next/link";
import TopCourses from "./components/TopCourses";
export default function Home() {
  return (
<main>
<section className="text-gray-900  bg-gray-100  text-center flex flex-col items-center  py-16 md:flex-row md:px-5 lg:px-20">
      <div className=" w-11/12 space-y-2 md:flex-1 md:text-start">
        <h1 className="text-2xl text-blue-600">
          Welcome to LearnHub – Your Gateway to Knowledge!
        </h1>
        <h3 className="text-xl  text-gray-800">
          Unlock Your Potential, Anytime, Anywhere
        </h3>
        <p>
          At LearnHub, we believe that learning should be accessible, engaging,
          and empowering. With a wide range of courses designed by experts, we
          make it easy for you to gain new skills and advance your career, all
          at your own pace.
        </p>
        <div className="space-x-4 py-3">
          <Link href={"/courses"}>
            {" "}
            <button className="font-bold bg-blue-600 p-3 text-white hover:bg-blue-400">
              Courses
            </button>
          </Link>
          <Link href={"/contact"}>
            {" "}
            <button className="font-bold bg-gray-300 p-3 hover:bg-gray-200">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="w-4/5 py-6 md:flex-1 md:w-3/5 ">
        <Image src={HomeImage} alt="HomeImage" className="lg:w-10/12 xl:7/12" />
      </div>
    </section>
    <TopCourses/>
</main>
  );
}
