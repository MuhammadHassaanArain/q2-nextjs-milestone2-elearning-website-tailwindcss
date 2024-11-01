import Image from "next/image";
import CourseWeb3 from "../../../public/Images/web3.0imageforwebiste.jpg";
import CourseAI from "../../../public/Images/aiimageeforwebsite.webp";
import CourseCC from "../../../public/Images/cloudcomputingimageforwebsite.jpg";
 export default function Courses() {
  return (
    <div className="bg-gray-100 flex flex-col items-center ">
      <h2 className="text-blue-600 text-3xl font-bold text-center py-10">Our Courses</h2>
        <main className=" flex flex-col items-center text-center w-11/12  md:grid md:grid-cols-2 lg:grid-cols-3">
        <section className="bg-white text-gray-900 rounded border border-gray-200 p-3 w-10/12 shadow-lg my-4">
          <Image src={CourseWeb3} alt="Courses" />
          <h3 className="text-gray-800  text-2xl py-4">Web 3.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section className="bg-white text-gray-900 rounded border border-gray-200 p-3 w-10/12 shadow-lg my-4">
          <Image src={CourseAI} alt="Courses" />
          <h3 className="text-gray-800 text-2xl py-4">Artificial Intelligence</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section className="bg-white text-gray-900 rounded border border-gray-200 p-3 w-10/12 shadow-lg my-4">
          <Image src={CourseCC} alt="Courses" />
          <h3 className="text-gray-800  text-2xl py-4">Cloud Computing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section  className="bg-white text-gray-900 rounded border border-gray-200 p-3 w-10/12 shadow-lg my-4 ">
          <Image src={CourseWeb3} alt="Courses" />
          <h3 className="text-gray-800  text-2xl py-4">Web 3.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
        <section  className="bg-white text-gray-900 rounded border border-gray-200 p-3 w-10/12 shadow-lg my-4">
          <Image src={CourseWeb3} alt="Courses" />
          <h3 className="text-gray-800  text-2xl py-4">Web 3.0</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Explicabo iusto officia minima voluptates ratione
            praesentium odit beatae itaque omnis facere,
          </p>
        </section>
      </main>
      
    </div>
  )
};