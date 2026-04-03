const Contact = () => {
  return (
    <center className="justify-center bg-slate-900 text-white px-8 py-12">

      <h1 className="text-3xl font-bold mb-6">
        Contact
      </h1>

      <p className="text-gray-400 mb-8">
        Feel free to reach out for opportunities, collaboration,
        or technical discussions.
      </p>

      <div className="bg-slate-800 p-6 rounded-lg max-w-xl">

        <div className="space-y-4">

          <div>
            <p className="text-gray-400">Name</p>
            <p className="text-lg">Vijay Kumar Bhukya</p>
          </div>

          <div>
            <p className="text-gray-400">Email</p>
            <a
              href="mailto:vijaybhukya009@gmail.com"
              className="text-blue-400 hover:underline"
            >
              vijaybhukya009@gmail.com
            </a>
          </div>

          <div>
            <p className="text-gray-400">Contact Number</p>
            <p>+91 6300377849</p>
            <a
              href="tel:+916300377849"
              className="text-blue-400 hover:underline mr-2"
            >
              Direct Call
            </a>
            <a
              href="https://wa.me/+916300377849"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>


          <div>
            <p className="text-gray-400">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/vijaykumar-bhukya/"
              className="text-blue-400"
              target="_blank"
            >
              LinkedIn Profile
            </a>
          </div>

          <div>
            <p className="text-gray-400">GitHub</p>
            <a
              href="https://github.com/VKB321"
              className="text-blue-400"
              target="_blank"
            >
              GitHub Profile
            </a>
          </div>

        </div>

      </div>

    </center>
  );
};

export default Contact;