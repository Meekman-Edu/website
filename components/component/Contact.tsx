import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-10 flex flex-col md:flex-row max-w-6xl mx-auto gap-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-1/2 ">
        <Image
          src="/contact-image.jpg"
          alt="Contact Us"
          width={500}
          height={500}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <article className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Contact Us
        </h2>

        <form className="space-y-6 p-6 rounded-lg ">
          <div>
            <label
              htmlFor="schoolName"
              className="block text-sm font-medium text-gray-700"
            >
              School or Business Name
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Contact;
