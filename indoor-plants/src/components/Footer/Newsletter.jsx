const Newsletter = () => (
  <div className="container text-white absolute top-0 right-0 left-0 -translate-y-1/2">
    <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
      <h3>
        <span className="text-yellow-500">Subscribe</span> to our newsletter
      </h3>

      <form
        className="flex flex-col md:flex-row gap-1"
        aria-label="Newsletter Subscription Form"
      >
        <label htmlFor="email" className="sr-only">
          Your Email Address
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-5 py-3 text-green-900 rounded-md outline-none"
          placeholder="Your Email Address"
          aria-label="Email Address"
        />
        <button
          className="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300"
          type="submit"
          aria-label="Subscribe"
        >
          <span>Subscribe</span>
          <i className="ri-send-plane-2-fill"></i>
        </button>
      </form>
    </div>
  </div>
);

export default Newsletter;
