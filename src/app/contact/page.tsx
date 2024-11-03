
export default function Contact() {
  return (
    <main className="text-gray-900 bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-600 text-center py-6">
        Contact Info
      </h2>
      <section className="lg:flex lg:justify-evenly">
        <section className="flex justify-center lg:w-2/6 mb-6 ">
          <div className="flex justify-center rounded shadow-lg border border-gray-200  bg-white w-3/4">
            <form className="flex flex-col ">
              <label className="text-xl py-2">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="p-2"
              />
              <label className="text-xl py-2">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="p-2"
              />
              <label className="text-xl py-2">Message</label>
              <textarea
                rows={3}
                placeholder="Write Your Message Here!"
              ></textarea>
              <div className="text-center p-4 ">
                <button
                
                  className="font-bold bg-blue-600 p-3 text-white hover:bg-blue-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
        <div className="flex justify-center py-9  lg:w-2/6">
          <section className="bg-white w-3/4 flex flex-col justify-around rounded border text-center border-gray-200 shadow-lg py-4 lg:h-4/5">
            <div className="text-gray-900">
              <h3 className="text-blue-600 text-xl ">Phone No</h3>
              <h3>03273789477</h3>
            </div>
            <div className="text-gray-900">
              <p className="text-blue-600 text-xl">Email </p>
              <p>hassaanarain008@gmail.com</p>
            </div>
            <div className="text-gray-900">
              <p className="text-blue-600 text-xl">Address </p>
              <p>Hyderabad Sindh, Pakistan</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
