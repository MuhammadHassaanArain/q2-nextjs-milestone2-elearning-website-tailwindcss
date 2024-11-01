export default function OurStatus() {
  return (
   <div className="md:flex md:justify-center bg-gray-100 py-10">
     <main className=" md:flex  md:justify-around md:w-3/4 text-center bg-gray-100">
      <section className="py-6">
        <h2 className="text-7xl text-blue-600">10K+</h2>
        <p className="text-gray-900 text-3xl">Students</p>
      </section>
      <section className="py-6">
        <h2 className="text-7xl text-blue-600">100+</h2>
        <p className="text-gray-900 text-3xl">Skills Lectures</p>
      </section>
      <section className="py-6">
        <h2 className="text-7xl text-blue-600">100k+</h2>
        <p className="text-gray-900 text-3xl">Watch Hours</p>
      </section>
    </main>
   </div>
  );
}
