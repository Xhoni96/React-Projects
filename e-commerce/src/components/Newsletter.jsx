const Newsletter = () => (
  <section className="flex flex-col gap-8 items-center p-72 bg-newsletter">
    <h1 className="text-8xl font-bold tracking-wider">Newsletter</h1>
    <p className="text-3xl font-light">
      Get timely updates from your favorite products.
    </p>
    <div className="text-3xl">
      <form>
        <input
          className="p-2 border rounded-sm outline-none"
          type="email"
          placeholder="Your email"
        />
        <button
          type="submit"
          className="p-2 px-6 bg-gray-300 border border-transparent"
        >
          Send
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;
