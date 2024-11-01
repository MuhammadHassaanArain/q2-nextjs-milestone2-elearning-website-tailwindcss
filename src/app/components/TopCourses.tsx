import Image from "next/image";
import CourseImage from "../../../public/Images/homepageimageforlearnhub.jpg";

export default function TopCourses() {
  return (
    <section className="text-gray-900 text-center   bg-gray-100 ">
      <div>
        <h2 className="text-blue-600 text-3xl  font-bold py-7">
          Popular Courses
        </h2>
      </div>
      <main className="flex flex-col items-center md:flex-row md:justify-around">
        <section className="bg-white  rounded border border-gray-200 p-3 my-4 w-11/12 shadow-md md:px-2 md:w-1/4 ">
          <Image src={CourseImage} alt="Courses" />
          <h3 className="text-gray-800  text-2xl py-4">Web 3.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section className="bg-white  rounded border border-gray-200 p-3 my-4 w-11/12 shadow-md md:px-2 md:w-1/4">
          <Image src={CourseImage} alt="Courses" />
          <h3 className="text-gray-800 text-2xl py-4">Web 3.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section className="bg-white  rounded border border-gray-200 p-3 my-4 w-11/12 shadow-md md:px-2 md:w-1/4">
          <Image src={CourseImage} alt="Courses" />
          <h3 className="text-gray-800  text-2xl py-4">Web 3.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
      </main>
    </section>
  );
};
